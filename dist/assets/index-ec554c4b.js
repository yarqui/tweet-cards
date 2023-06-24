import{j as e,a as A,r as d,L,P as T,s as x,b as g}from"./index-49fdf452.js";import{s as h,P as n,a as F,b as I,E as P,A as z,B,u as f}from"./Button-547080b7.js";const R="/tweet-cards/assets/rectangle1-25efb08c.svg",W="/tweet-cards/assets/misc-pic-76d820e9.png",_=h.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;

  width: 380px;
  min-height: 460px;
  padding: 36px;

  color: #ebd8ff;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;

  border-radius: 20px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);

  ::before {
    content: "";
    position: absolute;
    top: 36;
    left: 36;
    width: calc(100% - 72px);
    height: 100%;
    background-image: url(${W});
    background-position: top;
    background-repeat: no-repeat;
  }

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 380px;
    height: 8px;
    background-image: url(${R});
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
`,$=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  gap: 16px;
`,b=({tweets:t=0,followers:a=0})=>e.jsxs($,{children:[e.jsxs("p",{children:[t&&t.toLocaleString()," ",e.jsx("span",{children:"tweets"})]}),e.jsxs("p",{children:[a&&a.toLocaleString()," ",e.jsx("span",{children:"followers"})]})]});b.propTypes={tweets:n.number,followers:n.number};const q=[],w=({subscriptions:t,setSubscriptions:a})=>{const{id:i}=A(),[m,c]=d.useState(q),[p,r]=d.useState(!1);let{avatar:j,tweets:k,followers:o}=m;const y=s=>t.includes(s);d.useEffect(()=>{(async()=>{const s=await F(i);r(y(i)),c(s)})()},[]);const S=async s=>{if(t.indexOf(s)>=0){const u=t.filter(U=>U!==s);r(!p),a(u),x(g.subscriptions,u);const E=await f(s,o-=1);c(E);return}const l=[...t,s];r(!p),a(l),x(g.subscriptions,l);const v=await f(s,o+=1);c(v)};return e.jsxs(e.Fragment,{children:[e.jsx(L,{to:T.homepage,children:"Back to homepage"}),e.jsxs(_,{children:[e.jsxs(I,{children:[e.jsx(P,{}),e.jsx(z,{src:j,width:62,loading:"lazy"})]}),e.jsx(b,{tweets:k,followers:o}),e.jsx(B,{page:"tweet",userId:i,isFollowed:p,setIsFollowed:r,setSubscriptions:a,subscriptions:t,followers:o,checkSubscription:S})]})]})};w.propTypes={subscriptions:n.array.isRequired,setSubscriptions:n.func.isRequired};const D=w;export{D as default};
