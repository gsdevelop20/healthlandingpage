import{R as n,r as d,j as e,c as v,d as y,s as w,_ as u}from"./app-36341ba4.js";var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=n.createContext&&n.createContext(b),N=["attr","size","title"];function O(t,a){if(t==null)return{};var s=C(t,a),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}function C(t,a){if(t==null)return{};var s={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(a.indexOf(r)>=0)continue;s[r]=t[r]}return s}function m(){return m=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},m.apply(this,arguments)}function f(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),s.push.apply(s,r)}return s}function h(t){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?f(Object(s),!0).forEach(function(r){E(t,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(s,r))})}return t}function E(t,a,s){return a=P(a),a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}function P(t){var a=_(t,"string");return typeof a=="symbol"?a:a+""}function _(t,a){if(typeof t!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var r=s.call(t,a||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function j(t){return t&&t.map((a,s)=>n.createElement(a.tag,h({key:s},a.attr),j(a.child)))}function p(t){return a=>n.createElement(z,m({attr:h({},t.attr)},a),j(t.child))}function z(t){var a=s=>{var{attr:r,size:i,title:o}=t,x=O(t,N),l=i||s.size||"1em",c;return s.className&&(c=s.className),t.className&&(c=(c?c+" ":"")+t.className),n.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,r,x,{className:c,style:h(h({color:t.color||s.color},s.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),t.children)};return g!==void 0?n.createElement(g.Consumer,null,s=>a(s)):a(b)}function A(t){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(t)}function S(t){return p({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(t)}function B(t){return p({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function L(t){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(t)}const I=n.lazy(()=>u(()=>import("./HeaderComponent-1f59caf9.js"),["assets/HeaderComponent-1f59caf9.js","assets/app-36341ba4.js","assets/app-04931554.css","assets/HeaderComponent-73b95da3.css"])),M=n.lazy(()=>u(()=>import("./Carousel2-0446827a.js"),["assets/Carousel2-0446827a.js","assets/app-36341ba4.js","assets/app-04931554.css","assets/Carousel2-3c729d31.css"])),R=n.lazy(()=>u(()=>import("./ProductsComponent-1425a5c1.js"),["assets/ProductsComponent-1425a5c1.js","assets/app-36341ba4.js","assets/app-04931554.css","assets/index-773721af.js"])),D=n.lazy(()=>u(()=>import("./Cards-7d3c9073.js"),["assets/Cards-7d3c9073.js","assets/app-36341ba4.js","assets/app-04931554.css","assets/index-773721af.js","assets/Cards-ff51a20e.css"])),T=[{title:"Atestado Admissional",description:"",imageSrc:"/images/home/icons/estetoscopio.png"},{title:"Exames laboratóriais",description:"",imageSrc:"/images/home/icons/estetoscopio.png"},{title:"Consultas Médicas",description:"",imageSrc:"/images/home/icons/estetoscopio.png"}],k=[{title:"Ortopedia ",description:"",imageSrc:"/images/home/icons/simbolo-de-medicina.png"},{title:"Dermatologia",description:"",imageSrc:"/images/home/icons/simbolo-de-medicina.png"},{title:"Pediatria",description:"",imageSrc:"/images/home/icons/simbolo-de-medicina.png"}];function F({auth:t,laravelVersion:a,phpVersion:s}){const[r,i]=d.useState(1),o=d.useMemo(()=>({position:"fixed",bottom:"20px",right:"20px",zIndex:9999,width:"80px",height:"80px",borderRadius:"50%",backgroundColor:"#25D366",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)",transition:"transform 0.6s ease-in-out",transform:`scale(${r})`}),[r]),x=d.useMemo(()=>({position:"fixed",bottom:"120px",right:"20px",zIndex:9999,width:"80px",height:"80px",borderRadius:"50%",backgroundColor:"#e5e5e5",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)",transition:"transform 0.6s ease-in-out",transform:`scale(${r})`}),[r]);return d.useEffect(()=>{const l=document.createElement("script");l.src="https://static.elfsight.com/platform/platform.js",l.async=!0,l.defer=!0,document.body.appendChild(l)},[]),e.jsx(e.Fragment,{children:e.jsx(v,{children:e.jsxs(y,{children:[e.jsx(w,{title:"Clínica Amor Brasil"}),e.jsx("a",{href:"#main-content",className:"skip-link hidden",children:"Pular para o conteúdo principal"}),e.jsxs(d.Suspense,{fallback:e.jsx("div",{children:"Carregando..."}),children:[e.jsx("header",{children:e.jsx(I,{auth:t})}),e.jsxs("main",{id:"main-content",children:[e.jsx("section",{"aria-labelledby":"banner-heading",children:e.jsx("div",{className:"w-full banner flex justify-content-center flex-wrap gap-8",style:{backgroundImage:'url("/images/home/banners.jpg")'},role:"img","aria-label":"Banner da Clínica Amor Brasil com imagem de fundo",children:e.jsxs("div",{className:"container flex flex-column md:flex-row justify-content-center align-items-center gap-5",children:[e.jsx("img",{src:"/images/home/medica.webp",alt:"Médica sorridente representando a Clínica",className:"md:block hidden",width:400}),e.jsxs("div",{className:"d-flex flex-column justify-content-center align-items-center gap-5",children:[e.jsx("h1",{id:"banner-heading",className:"tile text-center font-bold text-white",children:"A melhor clínica, com qualidade excepcional e preços acessíveis."}),e.jsx("a",{href:"#contato",className:"btn w-full md:w-17rem","aria-label":"Entre em contato",children:"ENTRE EM CONTATO"})]})]})})}),e.jsxs("section",{className:"w-full mt-8","aria-labelledby":"about-us-heading",children:[e.jsx("h2",{id:"about-us-heading",className:"font-bold text-center",children:"Sobre Nós"}),e.jsxs("div",{className:"container flex-column md:flex-row rounded about-us p-5 md:p-8 flex justify-content-center align-items-center gap-8",children:[e.jsx("div",{children:e.jsx("img",{className:"rounded",src:"/images/home/medical.jpg",width:400,alt:"Equipe médica em ação",loading:"lazy"})}),e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"w-full",children:"Na Amor Saúde, acreditamos que o cuidado com a saúde vai além de exames e tratamentos. Nosso compromisso é com o bem-estar completo de nossos pacientes, oferecendo um atendimento humanizado, acolhedor e personalizado. Nossa missão é proporcionar uma experiência de saúde em que você se sinta valorizado, escutado e, acima de tudo, cuidado com carinho e respeito."}),e.jsx("p",{className:"w-full",children:"Com uma equipe de profissionais altamente qualificados e infraestrutura moderna, buscamos sempre as melhores soluções para sua saúde, com um olhar atento e dedicado a cada necessidade. Na Amor Saúde, entendemos que a saúde é um ato de amor, e estamos aqui para cuidar de você com a máxima atenção e competência."}),e.jsx("a",{href:"#contato",className:"btn w-full","aria-label":"Entre em contato",children:"ENTRE EM CONTATO"})]})]})]}),e.jsxs("section",{className:"w-full mt-5 banner banner-2 flex justify-content-center align-items-center caroucel-slider","aria-labelledby":"services-heading",style:{backgroundImage:'url("/images/home/hospital.jpg")'},children:[e.jsx("h2",{id:"services-heading",className:"visually-hidden",style:{zIndex:1},children:"Nossos Serviços"}),e.jsxs("div",{className:"flex gap-5 flex-column md:flex-row align-items-center",style:{zIndex:1},children:[e.jsx(M,{}),e.jsx(R,{data:T})]})]}),e.jsx(D,{data:k}),e.jsx("section",{id:"contato",className:"contact-section mt-8","aria-labelledby":"contact-heading",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{id:"contact-heading",className:"text-center section-title",children:"Não perca tempo e agende sua consulta"}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"contact-card p-4",children:[e.jsx("h4",{className:"mb-4",children:"Dados de Contato"}),e.jsxs("address",{children:[e.jsxs("p",{children:[e.jsx(B,{"aria-hidden":"true",className:"me-2"}),e.jsx("strong",{children:"Endereço:"})," St. Res. Leste | Buritís Q 2 | - Planaltina, Brasília - DF"]}),e.jsxs("p",{children:[e.jsx(L,{"aria-hidden":"true",className:"me-2"}),e.jsx("strong",{children:"Telefone:"})," (61) 99624-6801"]}),e.jsxs("p",{children:[e.jsx(A,{"aria-hidden":"true",className:"me-2"}),e.jsx("strong",{children:"Horário:"})," Segunda a Sexta: 8h - 19h e aos Sábados: 8h - 12h"]})]}),e.jsx("a",{href:"tel:5561996246801",className:"btn w-full mt-3 md:w-13rem","aria-label":"Ligar para a Clínica",children:"Ligue agora"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"map-container rounded shadow",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.122347701234!2d-47.6478812!3d-15.6171571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a6d30aa79a461%3A0x811a9a4592f18913!2sCl%C3%ADnica%20Amor%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr",title:"Localização da Clínica Amor Brasil",frameBorder:"0",style:{border:0,width:"100%",height:"295px"},allowFullScreen:"",loading:"lazy"})})})]})]})}),e.jsxs("section",{className:"w-full mt-8",children:[e.jsx("h2",{id:"services-heading",className:"text-center section-title",style:{zIndex:1},children:"Avaliações"}),e.jsx("iframe",{src:"https://24bf17270e424b5b831c36886639bc16.elf.site",title:"Avaliações do Google",frameBorder:"0",style:{border:0,width:"100%",height:"340px"},allowFullScreen:"",loading:"lazy"})]})]}),e.jsx("a",{href:"https://wa.me/5561996246801",target:"_blank",rel:"noopener noreferrer",className:"float-btn",style:o,onMouseEnter:()=>i(1.1),onMouseLeave:()=>i(1),"aria-label":"Chat via WhatsApp",children:e.jsx("img",{src:"/images/home/icons/whatsapp.png",width:50,alt:"Ícone do WhatsApp"})}),e.jsx("a",{href:"tel:61996246801",target:"_blank",rel:"noopener noreferrer",className:"float-btn",style:x,onMouseEnter:()=>i(1.1),onMouseLeave:()=>i(1),"aria-label":"Instagram",children:e.jsx("img",{src:"/images/home/icons/telefone.png",width:50,alt:"Ícone do WhatsApp"})}),e.jsxs("footer",{className:"text-center mt-8 text-lg-start bg-body-tertiary text-muted",role:"contentinfo",children:[e.jsx("section",{className:"d-flex justify-content-center justify-content-lg-between p-4 border-bottom","aria-label":"Redes sociais",children:e.jsx("div",{className:"d-none w-full d-lg-block flex justify-content-center",children:e.jsx("img",{className:"hidden md:block",width:150,alt:"logo clinica Amor Brasil",src:"/images/logo/logo.jpg"})})}),e.jsx("section",{children:e.jsx("div",{className:"container text-center text-md-start mt-5",children:e.jsx("div",{className:"row mt-3",children:e.jsxs("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[e.jsxs("h6",{className:"text-uppercase fw-bold mb-4",children:[e.jsx(S,{"aria-hidden":"true",className:"me-3"}),"Clínica Amor Brasil"]}),e.jsx("p",{children:"A melhor clínica, com qualidade excepcional e preços acessíveis."})]})})})}),e.jsx("div",{className:"text-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.05)"},children:e.jsxs("div",{className:"text-reset fw-bold",children:["© 2025 Copyright: Feito por  ",e.jsx("a",{href:"https://zionpublicidade.com",children:"Zion Publicidade."})," Todos os direitos reservados."]})})]})]})]})})})}export{F as default};
