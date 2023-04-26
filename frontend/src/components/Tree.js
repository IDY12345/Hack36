// import React, { useRef, useEffect } from 'react';
// import './Tree.css'
// const Tree = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     let treeHeight = 0;

//     const animate = () => {
//       if (treeHeight < canvas.height) {
//         treeHeight += 2;
//         drawTree(context, canvas.width / 2, canvas.height, 800, 0, treeHeight);
//         requestAnimationFrame(animate);
//       }
//     };

//     animate();
//   }, []);

//   const drawTree = (context, x, y, length, angle, height) => {
//     context.save();
//     context.translate(x, y);
//     context.rotate(angle * Math.PI / 180);
//     context.fillStyle = 'Green';
//     context.fillRect(-20, -height, 20, height);
//     if (height > 20) {
//       drawTree(context, 0, -height, length * 0.8, -15, height *0.8);
//       drawTree(context, 0, -height, length * 0.8, 15, height * 0.8);
//     }
//     context.restore();
//   };

//   return (<div className='Canvas'><canvas ref={canvasRef} width={500} height={500} /></div>);
// };

// export default Tree;
