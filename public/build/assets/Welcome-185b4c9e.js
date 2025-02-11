import{r as t,j as e,b as x,c as g,s as p,R as c,_ as d}from"./app-1aa86986.js";import{a as f,b as j,c as b,d as w,F as N}from"./index-11b37c7f.js";const v=c.lazy(()=>d(()=>import("./HeaderComponent-1f6a447c.js"),["assets/HeaderComponent-1f6a447c.js","assets/app-1aa86986.js","assets/app-04931554.css","assets/HeaderComponent-73b95da3.css"])),y=c.lazy(()=>d(()=>import("./ProductsComponent-67fc4cb2.js"),["assets/ProductsComponent-67fc4cb2.js","assets/app-1aa86986.js","assets/app-04931554.css","assets/index-7de9d3e1.js"])),C=c.lazy(()=>d(()=>import("./Cards-ba17b3be.js"),["assets/Cards-ba17b3be.js","assets/app-1aa86986.js","assets/app-04931554.css","assets/index-7de9d3e1.js","assets/Cards-f70b09b3.css"])),S=[{title:"Eletrocardiograma",description:"",imageSrc:"/images/home/icons/eletrocardiograma.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar um exame de Eletrocardiograma."},{title:"Exame ASO",description:"",imageSrc:"/images/home/icons/exame-medico.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar um exame ASO."},{title:"Exames Laboratoriais",description:"",imageSrc:"/images/home/icons/exame-de-saude.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar exames laboratoriais."}],E=[{title:"Dermatologia",description:"",imageSrc:"/images/home/icons/medico.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um dermatologista."},{title:"Endocrinologia",description:"",imageSrc:"/images/home/icons/medico.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um endocrinologista."},{title:"Ginecologia",description:"",imageSrc:"/images/home/icons/medico.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um ginecologista."},{title:"Nutricionista",description:"",imageSrc:"/images/home/icons/medico.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um nutricionista."},{title:"Ortopedia",description:"",imageSrc:"/images/home/icons/medico.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um ortopedista."},{title:"Pediatria",description:"",imageSrc:"/images/home/icons/medico.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um pediatra."},{title:"Psicologia",description:"",imageSrc:"/images/home/icons/medico.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um psicólogo."},{title:"Psiquiatria",description:"",imageSrc:"/images/home/icons/medico.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um psiquiatra."},{title:"Oftalmologia",description:"",imageSrc:"/images/home/icons/medico.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um oftalmologista."}],h=({src:l,title:m,style:r,...a})=>{const[s,n]=t.useState(!1),i=t.useRef(null);return t.useEffect(()=>{if(!("IntersectionObserver"in window)){n(!0);return}const o=new IntersectionObserver(([u])=>{u.isIntersecting&&(n(!0),o.disconnect())},{threshold:.25});return i.current&&o.observe(i.current),()=>{i.current&&o.unobserve(i.current)}},[]),e.jsx("div",{ref:i,style:r,children:s?e.jsx("iframe",{src:l,title:m,frameBorder:"0",style:r,allowFullScreen:!0,loading:"lazy",...a}):e.jsx("div",{style:{...r,backgroundColor:"#f0f0f0",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("span",{children:"Carregando avaliações..."})})})};function I({auth:l,laravelVersion:m,phpVersion:r}){const[a,s]=t.useState(1),n=t.useMemo(()=>({position:"fixed",bottom:"20px",right:"20px",zIndex:9999,width:"70px",height:"70px",borderRadius:"50%",backgroundColor:"#25D366",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)",transition:"transform 0.6s ease-in-out",transform:`scale(${a})`}),[a]),i=t.useMemo(()=>({position:"fixed",bottom:"190px",right:"20px",zIndex:9999,width:"70px",height:"70px",borderRadius:"50%",backgroundColor:"#e5e5e5",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)",transition:"transform 0.6s ease-in-out",transform:`scale(${a})`}),[a]),o=t.useMemo(()=>({position:"fixed",bottom:"103px",right:"20px",zIndex:9999,width:"70px",height:"70px",borderRadius:"50%",backgroundColor:"#e5e5e5",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)",transition:"transform 0.6s ease-in-out",transform:`scale(${a})`}),[a]);return e.jsx(e.Fragment,{children:e.jsx(x,{children:e.jsxs(g,{children:[e.jsx(p,{title:"Clínica Amor Brasil"}),e.jsx("a",{href:"#main-content",className:"skip-link hidden",children:"Pular para o conteúdo principal"}),e.jsxs(t.Suspense,{fallback:e.jsx("div",{children:"Carregando..."}),children:[e.jsx("header",{children:e.jsx(v,{auth:l})}),e.jsxs("main",{id:"main-content",children:[e.jsx("section",{"aria-labelledby":"banner-heading",children:e.jsx("div",{className:"w-full banner flex justify-content-center flex-wrap gap-8",style:{backgroundImage:'url("/images/home/banners.webp")'},role:"img","aria-label":"Banner da Clínica Amor Brasil com imagem de fundo",children:e.jsxs("div",{className:"container flex flex-column md:flex-row justify-content-center align-items-center gap-5",children:[e.jsx("img",{src:"/images/home/medica.webp",alt:"Médica sorridente representando a Clínica",className:"md:block hidden",width:400,height:"auto"}),e.jsxs("div",{className:"d-flex flex-column justify-content-center align-items-center gap-5",children:[e.jsx("h1",{id:"banner-heading",className:"tile text-center font-bold text-white",children:"Unimos atendimento humanizado a preços que cabem no seu bolso, cuidando de você e de quem você ama"}),e.jsx("a",{href:"#contato",className:"btn w-full md:w-17rem","aria-label":"Entre em contato",children:"ENTRE EM CONTATO"})]})]})})}),e.jsxs("section",{className:"w-full mt-8","aria-labelledby":"about-us-heading",children:[e.jsx("h2",{id:"about-us-heading",className:"font-bold text-center",children:"SOBRE NÓS"}),e.jsxs("div",{className:"container flex-column md:flex-row rounded about-us p-5 md:p-8 flex justify-content-center align-items-center gap-8",children:[e.jsx("div",{children:e.jsx("img",{className:"rounded",src:"/images/home/medical.jpg",width:350,alt:"Equipe médica em ação",loading:"lazy"})}),e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"w-full text-justify",children:"Na Clínica Amor Brasil, acreditamos que o cuidado com a saúde vai além de exames e tratamentos. Nosso compromisso é com o bem-estar completo de nossos pacientes, oferecendo um atendimento humanizado, acolhedor e personalizado. Nossa missão é proporcionar uma experiência de saúde em que você se sinta valorizado, escutado e, acima de tudo, cuidado com carinho e respeito."}),e.jsx("p",{className:"w-full text-justify",children:"Com uma equipe de profissionais altamente qualificados e infraestrutura moderna, buscamos sempre as melhores soluções para sua saúde, com um olhar atento e dedicado a cada necessidade. Na Clínica Amor Brasil, entendemos que a saúde é um ato de amor, e estamos aqui para cuidar de você com a máxima atenção e competência."}),e.jsx("a",{href:"#contato",className:"btn w-full","aria-label":"Entre em contato",children:"ENTRE EM CONTATO"})]})]})]}),e.jsxs("section",{className:"w-full mt-5 banner banner-2 flex justify-content-center align-items-center caroucel-slider","aria-labelledby":"services-heading",style:{backgroundImage:'url("/images/home/hospital.webp")'},children:[e.jsx("h2",{id:"services-heading",className:"visually-hidden",style:{zIndex:1},children:"Nossos Serviços"}),e.jsx("div",{className:"flex gap-5 flex-column md:flex-row align-items-center",style:{zIndex:1},children:e.jsx(y,{data:S})})]}),e.jsx(C,{data:E}),e.jsx("section",{id:"contato",className:"contact-section mt-8","aria-labelledby":"contact-heading",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{id:"contact-heading",className:"text-center section-title",children:"Não perca tempo e agende sua consulta"}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"contact-card p-4",children:[e.jsx("h4",{className:"mb-4",children:"CONTATO"}),e.jsxs("address",{children:[e.jsxs("p",{children:[e.jsx(f,{"aria-hidden":"true",className:"me-2"}),e.jsx("strong",{children:"Endereço:"})," Qd 02, Conj. D, Lote 40, Loja 01, Vila Buritis, Planaltina/DF"]}),e.jsxs("p",{children:[e.jsx(j,{"aria-hidden":"true",className:"me-2"}),e.jsx("strong",{children:"Telefone:"})," (61) 3489-3571"]}),e.jsxs("p",{children:[e.jsx(b,{"aria-hidden":"true",className:"me-2"}),e.jsx("strong",{children:"WhatsApp:"})," (61) 99624-6801"]}),e.jsxs("p",{children:[e.jsx(w,{"aria-hidden":"true",className:"me-2"}),e.jsx("strong",{children:"Horário:"})," Segunda a Sexta: 08h às 19h Sábados: 08h às 12h"]})]}),e.jsx("a",{href:"tel:556134893571",className:"btn w-full mt-3 md:w-13rem","aria-label":"Ligar para a Clínica",children:"Ligue agora"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"map-container rounded shadow",children:e.jsx(h,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.122347701234!2d-47.6478812!3d-15.6171571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a6d30aa79a461%3A0x811a9a4592f18913!2sCl%C3%ADnica%20Amor%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr",title:"Avaliações do Google",style:{border:0,width:"100%",height:"340px"}})})})]})]})}),e.jsxs("section",{className:"w-full mt-8",children:[e.jsx("h2",{id:"services-heading",className:"text-center section-title",style:{zIndex:1},children:"AVALIAÇÕES"}),e.jsx("div",{className:"map-container rounded",children:e.jsx(h,{src:"https://24bf17270e424b5b831c36886639bc16.elf.site",title:"Avaliações do Google",style:{border:0,width:"100%",height:"340px"}})})]})]}),e.jsx("a",{href:"https://wa.me/5561996246801",target:"_blank",rel:"noopener noreferrer",className:"float-btn",style:n,onMouseEnter:()=>s(1.1),onMouseLeave:()=>s(1),"aria-label":"Chat via WhatsApp",children:e.jsx("img",{src:"/images/home/icons/whatsapp.png",width:50,alt:"Ícone do WhatsApp"})}),e.jsx("a",{href:"https://www.instagram.com/clinicaamorbrasil/",target:"_blank",rel:"noopener noreferrer",className:"float-btn",style:o,onMouseEnter:()=>s(1.1),onMouseLeave:()=>s(1),"aria-label":"Perfil no Instagram",children:e.jsx("img",{src:"/images/home/icons/instagram.png",width:50,alt:"Ícone do Instagram"})}),e.jsx("a",{href:"tel:556134893571",target:"_blank",rel:"noopener noreferrer",className:"float-btn",style:i,onMouseEnter:()=>s(1.1),onMouseLeave:()=>s(1),"aria-label":"Ligar para a Clínica",children:e.jsx("img",{src:"/images/home/icons/telefone.png",width:45,alt:"Ícone do Telefone"})}),e.jsxs("footer",{className:"text-center mt-8 text-lg-start bg-body-tertiary text-muted",role:"contentinfo",children:[e.jsx("section",{className:"d-flex justify-content-center justify-content-lg-between p-4 border-bottom","aria-label":"Redes sociais",children:e.jsx("div",{className:"d-none w-full d-lg-block flex justify-content-center",children:e.jsx("img",{className:"hidden md:block",width:150,alt:"logo clinica Amor Brasil",src:"/images/logo/logo.jpg"})})}),e.jsx("section",{children:e.jsx("div",{className:"container text-center text-md-start mt-5",children:e.jsx("div",{className:"row mt-3",children:e.jsxs("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[e.jsxs("h6",{className:"text-uppercase fw-bold mb-4",children:[e.jsx(N,{"aria-hidden":"true",className:"me-3"}),"Clínica Amor Brasil"]}),e.jsx("p",{children:"A melhor clínica, com qualidade excepcional e preços acessíveis."})]})})})}),e.jsx("div",{className:"text-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.05)"},children:e.jsxs("div",{className:"text-reset fw-bold",children:["© 2025 Copyright: Feito por ",e.jsx("a",{href:"https://zionpublicidade.com",children:"Zion Publicidade."})," Todos os direitos reservados."]})})]})]})]})})})}export{I as default};
