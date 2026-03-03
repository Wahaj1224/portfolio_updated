

import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function AvatarModel({ onHover, onUnhover }) {
  const group = useRef();
  const { scene, animations } = useGLTF("/untitledme1.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["Arms_Down"]) {
      actions["Arms_Down"].play();
    }
  }, [actions]);

  return (
    <primitive
      object={scene}
      ref={group}
      scale={[1, 1, 1]}
      castShadow
      receiveShadow
      // 🔸 Hover Events
      onPointerOver={onHover}
      onPointerOut={onUnhover}
      
    />
  );
}

export default function Avatar3D() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {/* 🟢 Popup Image */}



      {isHovered && (
        <div
          style={{
            // position: "absolute",
            // top: "80px",
             position: "fixed",           // changed from absolute to fixed
            top: "150px",
            left: "65%",
            transform: "translateX(-50%)",
            zIndex: 10,
            background: "transparent",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            pointerEvents: "none",
            
  
          }}
        >
          <img
            src="/myimage.jpeg" 
            alt="Original"
            


    style={{
    width: "140px",
    height: "140px",     
    borderRadius: "50%",  
    objectFit: "cover"    
  }}
          />
          
        </div>
      )}

     
    
{/* {isHovered && (
  <div style={{
    position: "fixed",
    top: "150px",
    left: "90%",
    transform: "translateX(-50%)",
    zIndex: 10,
    background: "transparent",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    pointerEvents: "none",
  }}>
    <div style={{
      width: 140,
      height: 140,          // square wrapper
      borderRadius: "50%",  // circle clipping
      overflow: "hidden",   // clip image
    }}>
      <img
        src="/myimage.jpeg"
        alt="Original"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  </div>
)}
 */}










      {/* 🔵 Avatar Canvas */}
      <Canvas
        shadows
        style={{
          // height: "1500px",
          height: "1200px",

          width: "100%",
          position: "relative",
          top: "-100px",
          pointerEvents: "none",
        }}
        camera={{ position: [0, 1.8, 6.5], fov: 35 }}
      >
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[4, 6, 5]}
          intensity={1.6}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight position={[-4, 3, 2]} intensity={0.6} />
        <directionalLight position={[0, 2, -6]} intensity={0.7} />

        <Suspense fallback={null}>
         
          <AvatarModel
  onHover={() => {
    setIsHovered(true);
    document.body.style.cursor = "pointer";
  }}
  onUnhover={() => {
    setIsHovered(false);
    document.body.style.cursor = "default"; 
  }}
/>
        </Suspense>

     
         <OrbitControls 
        //  enabled={!isMobile} 
         enableRotate={false}
         
         enableZoom={false}
         
         />
      </Canvas>
    </div>
  );
}

















// import React, { Suspense, useRef, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// function AvatarModel({ onHover, onUnhover }) {
//   const group = useRef();
//   const { scene, animations } = useGLTF("/untitledme1.glb");
//   const { actions } = useAnimations(animations, group);

//   useEffect(() => {
//     if (actions["Arms_Down"]) {
//       actions["Arms_Down"].play();
//     }
//   }, [actions]);

//   return (
//     <primitive
//       object={scene}
//       ref={group}
//       scale={[1, 1, 1]}
//       castShadow
//       receiveShadow
//       onPointerOver={onHover}
//       onPointerOut={onUnhover}
//     />
//   );
// }

// export default function Avatar3D() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div style={{ position: "relative" }}>
//       {/* 🔴 Hover Image Popup */}
//       {isHovered && (
//         <div
//           style={{
//             position: "fixed",
//             top: "150px",
//             left: "65%", // <-- moved to left side
//             transform: "translateX(-50%)",
//             zIndex: 10,
//             background: "transparent",
//             padding: "5px",
//             borderRadius: "10px",
//             pointerEvents: "none",
//           }}
//         >
//           <div
//             style={{
//               width: 100, // smaller size
//               height: 100,
//               borderRadius: "50%",
//               overflow: "hidden",
//             }}
//           >
//             <img
//               src="/myimage.jpeg"
//               alt="Avatar Popup"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 objectPosition: "center",
//                 display: "block",
//               }}
//             />
//           </div>
//         </div>
//       )}

//       {/* 🔵 3D Avatar Canvas */}
//       <Canvas
//         shadows
//         style={{
//           height: "1200px",
//           width: "100%",
//           position: "relative",
//           top: "-100px",
//         }}
//         camera={{ position: [0, 1.8, 6.5], fov: 35 }}
//       >
//         <ambientLight intensity={0.5} />
//         <directionalLight
//           position={[4, 6, 5]}
//           intensity={1.6}
//           castShadow
//           shadow-mapSize-width={2048}
//           shadow-mapSize-height={2048}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />
//         <directionalLight position={[-4, 3, 2]} intensity={0.6} />
//         <directionalLight position={[0, 2, -6]} intensity={0.7} />

//         <Suspense fallback={null}>
//           <AvatarModel
//             onHover={() => {
//               setIsHovered(true);
//               document.body.style.cursor = "pointer";
//             }}
//             onUnhover={() => {
//               setIsHovered(false);
//               document.body.style.cursor = "default";
//             }}
//           />
//         </Suspense>

//         <OrbitControls
//           enableRotate={false}
//           enableZoom={false}
//         />
//       </Canvas>
//     </div>
//   );
// }



























// // src/components/AvaturnBuilder.jsx


// // import React, { useEffect, useRef } from "react";
// // import { AvaturnSDK } from "@avaturn/sdk"; // Use the installed SDK

// // export default function AvaturnBuilder() {
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     const container = containerRef.current;

// //     const subdomain = "myportfolio12"; // ✅ Replace this with your subdomain from avaturn.dev
// //     const url = `https://${subdomain}.avaturn.dev`;

// //     const sdk = new AvaturnSDK();

// //     sdk
// //       .init(container, { url })
// //       .then(() => {
// //         sdk.on("export", (data) => {
// //           alert("Avatar exported successfully. Check console for details.");
// //           console.log("Avaturn Export Data:", data);
// //           // You can now use `data.gltf` or `data.url` as needed
// //         });
// //       });
// //   }, []);

// //   return (
// //     <div
// //       ref={containerRef}
// //       id="avaturn-sdk-container"
// //       style={{
// //         width: "100%",
// //         height: "100vh", // Full screen height
// //         border: "none",
// //       }}
// //     />
// //   );
// // }


// // import React, { useEffect, useState, useCallback } from "react";
// // import { AvaturnSDK, AssetItem, BodyItem } from "@avaturn/sdk";

// // export default function AvaturnBuilder() {
// //   const [containerRef, setContainerRef] = useState(null);
// //   const [sdk] = useState(new AvaturnSDK());
// //   const [editorLoaded, setEditorLoaded] = useState(false);
// //   const [assetList, setAssetList] = useState([]);
// //   const [bodyList, setBodyList] = useState([]);

// //   useEffect(() => {
// //     if (!containerRef) return;
// //     setEditorLoaded(false);

// //     const url = "https://myportfolio12.avaturn.dev";

// //     sdk
// //       .init(containerRef, {
// //         url,
// //         iframeClassName: "sdk-iframe",
// //         disableUi: true,
// //       })
// //       .then(() => {
// //         sdk
// //           .on("load", () => {
// //             sdk.setBackgroundColor("#ffffff");
// //             setEditorLoaded(true);
// //             sdk.getBodyList().then(setBodyList);
// //             sdk.getAssetList().then((list) => setAssetList(list));
// //           })
// //           .on("export", (data) => {
// //             alert("Avatar exported successfully. Check console for details.");
// //             console.log("Avaturn Export Data:", data);
// //           });
// //       });

// //     return () => {
// //       sdk.destroy();
// //       setAssetList([]);
// //       setBodyList([]);
// //     };
// //   }, [sdk, containerRef]);

// //   const handleSetAsset = (id) => {
// //     sdk.setActiveAsset(id);
// //   };

// //   const handleSetBody = (id) => {
// //     sdk.setActiveBody(id);
// //   };

// //   const handleExportAvatar = () => {
// //     sdk.exportAvatar().then(console.log);
// //   };

// //   return (
// //     <div className="sdk">
// //       <div
// //         ref={setContainerRef}
// //         className="sdk__scene"
// //         style={{ width: "100%", height: "100vh", border: "none" }}
// //       />

// //       {editorLoaded && (
// //         <div className="sdk__controls">
// //           <h3>Actions</h3>
// //           <button onClick={handleExportAvatar}>Export Avatar</button>
// //           <div className="assets">
// //             {assetList.map((item) => (
// //               <div
// //                 key={item.id}
// //                 className="assets__item"
// //                 onClick={() => handleSetAsset(item.id)}
// //               >
// //                 <img src={item.preview} alt={item.id} />
// //               </div>
// //             ))}
// //           </div>
// //           <div className="assets">
// //             {bodyList.map((item) => (
// //               <div
// //                 key={item.id}
// //                 className="assets__item"
// //                 onClick={() => handleSetBody(item.id)}
// //               >
// //                 <img src={item.preview} alt={item.id} />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
