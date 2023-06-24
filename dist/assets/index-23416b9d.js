import{u as g,j as a,P as j,r as i}from"./index-49fdf452.js";import{s as p,P as y,I as h,A as P,B as U,f as l}from"./Button-547080b7.js";const w=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  padding-top: 16px;
  padding-bottom: 16px;
`,D=p.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,x=({user:r})=>{const{id:c,userName:s,avatar:d}=r,e=g(),t=async n=>{e(`${j.tweet}/${n}`)};return a.jsxs(h,{onClick:()=>{t(c)},children:[a.jsx(P,{src:d,width:60,loading:"lazy"}),a.jsx("p",{children:s})]})};x.propTypes={user:y.object.isRequired};const I=[],b=1,o=3,E=()=>{const[r,c]=i.useState(I),[s,d]=i.useState(b);return i.useEffect(()=>{(async()=>{const t=(s-1)*o,n=t+o,u=(await l()).slice(t,n);c(u)})()},[]),i.useEffect(()=>{const e=async()=>{const t=(s-1)*o,n=t+o,u=(await l()).slice(t,n);c(m=>[...m,...u])};s>1&&e()},[s]),a.jsxs(w,{children:[a.jsx(D,{children:r&&r.map(e=>a.jsx(x,{user:e},e.id))}),a.jsx(U,{type:"button",page:"main",setCurrentPageNumber:d,currentPageNumber:s,children:"Load more"})]})},T=E;export{T as default};
