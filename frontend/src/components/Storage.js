import React from "react";
import "./Storage.css";
import FileUpload from "./FileUpload";
import Display from "./Display";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Upload from "../artifacts/contracts/Upload.sol/Upload.json";
import Modal1 from "./Modal1";

function Storage() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [provider, setProvider] = useState(null);
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x4fFb4d9De954A4B4aC1A989368EA39C10714e9b9";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );

        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Please install metamask");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <div>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}{" "}
      {modalOpen && (
        <Modal1 setModalOpen={setModalOpen} contract={contract}></Modal1>
      )}
      <div className="App">
        <h1>Decentralized docs holder</h1>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <p>Account : {account ? account : "Please connect Metamask"}</p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display account={account} contract={contract}></Display>
      </div>
    </div>
  );
}

export default Storage;
