"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[870],{958:(e,t,n)=>{n.d(t,{D:()=>c});var r,i=n(168),a=(n(7313),n(2151)),o=n(6417);const s=a.ZP.h2(r||(r=(0,i.Z)(["\n  color: #9bc2c2;\n"]))),c=e=>{let{title:t}=e;return(0,o.jsx)(s,{children:t})}},5659:(e,t,n)=>{n.d(t,{Y:()=>c});var r,i=n(168),a=(n(7313),n(2151)),o=n(6417);const s=a.ZP.button(r||(r=(0,i.Z)(["\n  background-color: #9bc2c2;\n  color: white;\n  font-weight: bold;\n  //width: 120px;\n  border: none;\n  border-radius: 5px;\n  cursor: ",";\n  padding: 20px;\n  opacity: ",";\n"])),(e=>{let{isSubmitting:t}=e;return t?"not-allowed":"pointer"}),(e=>{let{isSubmitting:t}=e;return t?.5:1})),c=e=>{let{title:t,type:n,disabled:r,onClickNavigate:i,onClickDownload:a,isSubmitting:c}=e;return(0,o.jsx)(s,{isSubmitting:c,type:n,disabled:r,onClick:i||a,children:t})}},6054:(e,t,n)=>{n.d(t,{T:()=>r});const r=e=>{window.location.href=e}},4300:(e,t,n)=>{n.d(t,{O6:()=>d,_r:()=>u,uS:()=>l,wX:()=>p});var r,i,a,o,s=n(168),c=n(2151);const l=c.ZP.div(r||(r=(0,s.Z)(["\n  height: 100vh;\n  scroll-snap-align: center;\n"]))),u=c.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),d=c.ZP.div(a||(a=(0,s.Z)(["\n  flex: 1;\n"]))),p=c.ZP.h1(o||(o=(0,s.Z)(["\n  font-size: 74px;\n"])))},4870:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(7313),i=n(4871),a=n(5659),o=n(958),s=n(6054),c=n(5819),l=n(7158),u=n(238),d=n(7462),p=n(5825);function A(e,t,n){const i=(0,u.A)((e=>e.size)),a=(0,u.A)((e=>e.viewport)),o="number"===typeof e?e:i.width*a.dpr,s="number"===typeof t?t:i.height*a.dpr,c=("number"===typeof e?n:e)||{},{samples:l=0,depth:d,...A}=c,f=r.useMemo((()=>{const e=new p.WebGLRenderTarget(o,s,{minFilter:p.LinearFilter,magFilter:p.LinearFilter,type:p.HalfFloatType,...A});return d&&(e.depthTexture=new p.DepthTexture(o,s,p.FloatType)),e.samples=l,e}),[]);return r.useLayoutEffect((()=>{f.setSize(o,s),l&&(f.samples=l)}),[l,f,o,s]),r.useEffect((()=>()=>f.dispose()),[]),f}const f=r.forwardRef(((e,t)=>{let{children:n,compute:i,width:a,height:o,samples:s=8,renderPriority:c=0,eventPriority:l=0,frames:f=1/0,stencilBuffer:m=!1,depthBuffer:x=!0,generateMipmaps:g=!1,...y}=e;const{size:v,viewport:b}=(0,u.A)(),w=A((a||v.width)*b.dpr,(o||v.height)*b.dpr,{samples:s,stencilBuffer:m,depthBuffer:x,generateMipmaps:g}),[j]=r.useState((()=>new p.Scene)),Z=r.useCallback(((e,t,n)=>{var r,i;let a=null==(r=w.texture)?void 0:r.__r3f.parent;for(;a&&!(a instanceof p.Object3D);)a=a.__r3f.parent;if(!a)return!1;n.raycaster.camera||n.events.compute(e,n,null==(i=n.previousRoot)?void 0:i.getState());const[o]=n.raycaster.intersectObject(a);if(!o)return!1;const s=o.uv;if(!s)return!1;t.raycaster.setFromCamera(t.pointer.set(2*s.x-1,2*s.y-1),t.camera)}),[]);return r.useImperativeHandle(t,(()=>w.texture),[w]),r.createElement(r.Fragment,null,(0,u.g)(r.createElement(h,{renderPriority:c,frames:f,fbo:w},n,r.createElement("group",{onPointerOver:()=>null})),j,{events:{compute:i||Z,priority:l}}),r.createElement("primitive",(0,d.Z)({object:w.texture},y)))}));function h(e){let t,{frames:n,renderPriority:i,children:a,fbo:o}=e,s=0;return(0,u.C)((e=>{(n===1/0||s<n)&&(t=e.gl.autoClear,e.gl.autoClear=!0,e.gl.setRenderTarget(o),e.gl.render(e.scene,e.camera),e.gl.setRenderTarget(null),e.gl.autoClear=t,s++)}),i),r.createElement(r.Fragment,null,a)}const m=function(e){return function(t){e.forEach((function(e){"function"===typeof e?e(t):null!=e&&(e.current=t)}))}},x=r.forwardRef(((e,t)=>{let{envMap:n,resolution:i=256,frames:a=1/0,makeDefault:o,children:s,...c}=e;const l=(0,u.A)((e=>{let{set:t}=e;return t})),p=(0,u.A)((e=>{let{camera:t}=e;return t})),f=(0,u.A)((e=>{let{size:t}=e;return t})),h=r.useRef(null),x=r.useRef(null),g=A(i);r.useLayoutEffect((()=>{c.manual||(h.current.aspect=f.width/f.height)}),[f,c]),r.useLayoutEffect((()=>{h.current.updateProjectionMatrix()}));let y=0,v=null;const b="function"===typeof s;return(0,u.C)((e=>{b&&(a===1/0||y<a)&&(x.current.visible=!1,e.gl.setRenderTarget(g),v=e.scene.background,n&&(e.scene.background=n),e.gl.render(e.scene,h.current),e.scene.background=v,e.gl.setRenderTarget(null),x.current.visible=!0,y++)})),r.useLayoutEffect((()=>{if(o){const e=p;return l((()=>({camera:h.current}))),()=>l((()=>({camera:e})))}}),[h,o,l]),r.createElement(r.Fragment,null,r.createElement("perspectiveCamera",(0,d.Z)({ref:m([h,t])},c),!b&&s),r.createElement("group",{ref:x},b&&s(g.texture)))}));var g=n(1120);const y=r.forwardRef(((e,t)=>{let{sdfGlyphSize:i=64,anchorX:a="center",anchorY:o="middle",font:s,fontSize:c=1,children:l,characters:p,onSync:A,...f}=e;const{Text:h,preloadFont:m}=(0,g.Rq)((async()=>n.e(109).then(n.bind(n,109))),[]),x=(0,u.A)((e=>{let{invalidate:t}=e;return t})),[y]=r.useState((()=>new h)),[v,b]=r.useMemo((()=>{const e=[];let t="";return r.Children.forEach(l,(n=>{"string"===typeof n||"number"===typeof n?t+=n:e.push(n)})),[e,t]}),[l]);return(0,g.Rq)((()=>new Promise((e=>m({font:s,characters:p},e)))),["troika-text",s,p]),r.useLayoutEffect((()=>{y.sync((()=>{x(),A&&A(y)}))})),r.useEffect((()=>()=>y.dispose()),[y]),r.createElement("primitive",(0,d.Z)({object:y,ref:t,font:s,text:b,anchorX:a,anchorY:o,fontSize:c,sdfGlyphSize:i},f),v)}));var v=n(6417);const b=()=>{const e=(0,r.useRef)(null);return(0,u.C)((t=>{e.current&&(e.current.position.x=1.1*Math.sin(t.clock.elapsedTime))})),(0,v.jsxs)("mesh",{children:[(0,v.jsx)("boxGeometry",{}),(0,v.jsx)("meshStandardMaterial",{children:(0,v.jsxs)(f,{attach:"map",children:[(0,v.jsx)(x,{makeDefault:!0,position:[0,0,5]}),(0,v.jsx)("color",{attach:"background",args:["#7aec66"]}),(0,v.jsx)(y,{fontSize:2.5,color:"#ce5427",position:[0,0,1],ref:e,children:"hello"})]})})]})},w=()=>(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(c.Xz,{camera:{fov:25,position:[5,5,5]},children:[(0,v.jsx)(l.z,{enableZoom:!1,autoRotate:!0}),(0,v.jsx)("ambientLight",{intensity:1}),(0,v.jsx)("directionalLight",{position:[3,2,1]}),(0,v.jsx)(b,{})]})});var j,Z,E,S,P,F,R,C,k=n(168),T=n(2151),X=n(4300);const z=(0,T.ZP)(X.uS)(j||(j=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),I=(0,T.ZP)(X._r)(Z||(Z=(0,k.Z)(["\n  height: 100vh;\n  scroll-snap-align: center;\n  width: 1400px;\n"]))),M=(0,T.ZP)(X.O6)(E||(E=(0,k.Z)(["\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),B=(0,T.ZP)(X.wX)(S||(S=(0,k.Z)(["\n  @media only screen and (max-width: 768px) {\n    font-size: 60px;\n  }\n"]))),D=T.ZP.div(P||(P=(0,k.Z)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n\n  @media only screen and (max-width: 768px) {\n    align-items: center;\n    text-align: center;\n  }\n"]))),Q=T.ZP.div(F||(F=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),L=T.ZP.img(R||(R=(0,k.Z)(["\n  height: 5px;\n"]))),O=T.ZP.p(C||(C=(0,k.Z)(["\n  font-size: 24px;\n  color: #737d81;\n  @media only screen and (max-width: 768px) {\n    font-size: 24px;\n    color: #737d81;\n    padding: 5px;\n  }\n"]))),N=()=>(0,v.jsx)(z,{id:"about",children:(0,v.jsxs)(I,{children:[(0,v.jsx)(M,{children:(0,v.jsx)(w,{})}),(0,v.jsxs)(D,{children:[(0,v.jsx)(B,{children:"About Me"}),(0,v.jsxs)(Q,{children:[(0,v.jsx)(L,{src:"".concat(i)}),(0,v.jsx)(o.D,{title:"My name is Ilya."})]}),(0,v.jsx)(O,{children:"I am well versed in the language, every day I develop my own projects or study new language features."}),(0,v.jsx)(a.Y,{title:"Sea are works",onClickNavigate:()=>(0,s.T)("https://github.com/IlyaGoncharovY")})]})]})})},4871:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAACDBAMAAACHPmKGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcZUI/2kE/48F/64P/5oQ/poG/58P/5EA/44B/pQD/XcP/4sO7Ltm95wt8dR8/ztAafAAAAAIdFJOUwATn36r/FPcc0SqEgAAA+9JREFUeNrt3E9P02AAx/EuJpy3YLjbRS5ecFNIDBcQxXjFhkBCopDMizf+LBJfQJ+dJT7P5OhC14M3Yww3b0SuHjz4FnwL2vbpRsFAeJ62OMz344Yzrt14fn2ep0/bp44DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXCO1UtdeqWnV2iiYmJho2djY2JhuTjc3ms3oZ3nqMdd169HrVq2at+gbrvtwYbRtbbUXF9uXsx3zBjIvr0Z7YT4KJUceY43DPS9U5ZPpX5pvJFm23++eWaGUSgjhi1PvVVdM6KdIvo16r1ToteenratJ5d5uvxsGMlql1L+YEvKcx1X+mtnPFcNP1mEK/7xlkven79OLKv3NdamJ9L/tCl7zky+QPPUjeinih5LJ1iBFEKruct02kfXt1eTjzmxmI0Vc+M9zFpGXfav5lxHJn2EkIvM5QuqNpbc8aZfI+HZfb1vRejph2PH9wIetMIi2bF0Hu8t3rRqsGd17xDkrCjS/qN1KG8Xw63ObCrI76Jh0rROSMs2RRrz7MezfercsAplJakeaglDIu8eVKcnuknkvMvZEN1jpaqJdBSmIxX7PcNDC6DI8MG+zxldU3JvT2BTYhZwEsjdnHMjLpJpJOo6CpQ3NpnEgD0Z9BHJ9xYEsm7ZZY0+H/QdKSKRnOhQZe00g5XUn0X7WjmEgN/WeAYVXUiBqySoQlBbIs6r5ThaBjFCvTiAl1xDTQF4Nx/ocNylqrH5SQ6T5WH1W6FN3gS/2j1GAo0wgQkjjQIaHd8XaTxTgh8zUEF++swgkXXrtNwrwPcgcP/GFcSCBnx7H6nz8hQKsZmpI9PxguNs7OzwXIvaR3/FR5sB5fCWGaSD32e0t+jDv6XHIpmM9DiGXMgaGOw4Dw5EKZM7m/BRFV9pIfW/K4uAigZQXyFvTE1Q3Vmiyygxkyfiik10CKTOQx8bXLT6izSqxT9+fMr7IQV8nRyTF1w5p04VEvfpK9qAxrVf+epE9l2F+FVDSiWQC4ZxI7tMhMhOI+XVyTuV2/9RpFRIpIBCZTgqyaLEcZ91LZyOIwZkR5DyYNZyjZdFiRW3Wne5gfohSnYACzSdM5ofoa98PrCbsOONfVtNGS/lhSJHm0gkDX6XzQ3qbdlPaKuufvH6SCEPEYoYfSf0IvXd2FSROpL2iumEYJj+QU1/FRanU50n7+wa0Ggvtbc/rE0gRgXQ9z+u1Xft56sldNFrNhtt+8+0QBXDdev7ba8ShRC66m4dbdxvx/TwQi8ujXv+7nKZbrRe5w7BXrdSiZzVV+w9VNMep/cNiBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwLn+ABXLlptIfUlPAAAAAElFTkSuQmCC"}}]);