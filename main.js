(()=>{"use strict";function e(e){let t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h1"),l=document.createElement("form"),c=document.createElement("label"),s=document.createElement("input"),d=document.createElement("label"),i=document.createElement("input"),m=document.createElement("label"),o=document.createElement("input"),r=document.createElement("label"),p=document.createElement("input"),u=document.createElement("button");e.appendChild(t),t.appendChild(n),n.appendChild(a),t.appendChild(l),l.appendChild(c),l.appendChild(s),l.appendChild(d),l.appendChild(i),l.appendChild(m),l.appendChild(o),l.appendChild(r),l.appendChild(p),l.appendChild(u),n.className="reservationLogoDiv",a.className="reservationHeading",l.className="reservationFormDiv",c.className="labels",d.className="labels",m.className="labels",r.className="labels",s.className="inputs",i.className="inputs",o.className="inputs",p.className="inputs",u.className="reservation-submit",u.addEventListener("click",(e=>{e.preventDefault()})),c.textContent="Name",d.textContent="Contact No.",m.textContent="Appointment date",r.textContent="No. of people",u.textContent="Submit",a.textContent="Book a reservation",console.log("reservation")}function t(e){let t=document.createElement("div"),n=document.createElement("h1");e.appendChild(t),t.appendChild(n),t.className="footerDiv",n.className="footerText",n.textContent="IMAGINE FOOTER",console.log("Footer log")}let n=document.createElement("div");let a=document.createElement("div"),l=document.createElement("h2"),c=document.createElement("img"),s=document.createElement("p"),d=document.createElement("div"),i=document.createElement("h1"),m=document.createElement("div"),o=document.createElement("button"),r=document.createElement("ul"),p=document.createElement("li"),u=document.createElement("li"),C=document.createElement("li");document.body.appendChild(d),d.appendChild(i),d.appendChild(m),m.appendChild(o),d.appendChild(r),r.appendChild(p),r.appendChild(u),r.appendChild(C);let h=document.createElement("div"),v=document.createElement("div"),E=document.createElement("img"),N=document.createElement("p"),g=document.createElement("div"),x=document.createElement("h1"),b=document.createElement("div"),f=document.createElement("h3"),L=document.createElement("p"),T=document.createElement("img"),D=document.createElement("p"),M=document.createElement("img"),w=document.createElement("div"),I=document.createElement("div");document.body.appendChild(h),h.appendChild(v),v.appendChild(N),h.appendChild(E),h.appendChild(g),g.appendChild(x),h.appendChild(b),b.appendChild(f),b.appendChild(w),w.appendChild(T),w.appendChild(L),b.appendChild(I),I.appendChild(M),I.appendChild(D),h.classList.add("frontDiv"),E.className="banner",v.className="front-description",N.className="front-description-txt",g.className="buffetBanner",b.className="buffetDiv",f.className="buffetDivHeading",w.className="Buffetsection1",I.className="Buffetsection2",T.src="../assets/work.jpg",T.className="sectionimg1",L.className="sectionText1",M.src="../assets/front-pic-2.jpg",M.className="sectionimg2",D.className="sectionText2",console.log("welcome"),i.className="heading",d.className="navBarDiv",r.className="navbar-list",p.className="navbar-items",u.className="navbar-items",C.className="navbar-items",i.textContent="The Bar..",p.textContent="Home",u.textContent="Menu",C.textContent="About us",d.classList.add("sticky"),o.className="toggleMenu",o.innerHTML='<img src = "../assets/menu-dropdown.png"></img>  ',o.addEventListener("click",(e=>{e.preventDefault();let t=document.createElement("div");m.classList.toggle("toggleMenuDiv"),m.appendChild(t),t.classList.toggle("toggleItems"),t.textContent="Items"})),i.addEventListener("click",(()=>{location.reload()})),p.addEventListener("click",(()=>{location.reload()}),{once:!0}),u.addEventListener("click",(()=>{h.remove(),a.remove(),document.body.appendChild(n),n.classList.add("menuDiv"),console.log("menu"),function(e){let t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h2"),l=document.createElement("div"),c=document.createElement("h2"),s=document.createElement("div"),d=document.createElement("h2"),i=document.createElement("div"),m=document.createElement("h2"),o=document.createElement("div"),r=document.createElement("h2"),p=document.createElement("div"),u=document.createElement("h2");e.appendChild(t),t.appendChild(n),n.appendChild(a),t.appendChild(l),l.appendChild(c),t.appendChild(s),s.appendChild(d),t.appendChild(i),i.appendChild(m),t.appendChild(o),o.appendChild(r),t.appendChild(p),p.appendChild(u),t.className="cardsDiv",n.className="cardsMain1",a.textContent="Item 1",a.className="cardsText",l.className="cardsMain2",c.textContent="Item 2",c.className="cardsText",s.className="cardsMain3",d.textContent="Item 3",d.className="cardsText",i.className="cardsMain4",m.textContent="Item 4",m.className="cardsText",o.className="cardsMain5",r.textContent="Item 5",r.className="cardsText",p.className="cardsMain6",u.textContent="Item 6",u.className="cardsText",console.log("cards")}(n),e(n),t(n)}),{once:!0}),C.addEventListener("click",(()=>{n.remove(),h.remove(),document.body.appendChild(a),a.appendChild(c),a.appendChild(l),a.appendChild(s),l.className="subText",c.className="aboutUsAvatar",s.className="aboutUsDescription",l.textContent="Lorem ipsum!",c.src="../assets/manager.jpg",s.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor integer id sapien, placerat leo tempor tristique posuere interdum. Lacinia etiam nulla et accumsan, vel ut gravida vulputate imperdiet. Enim, pulvinar id sociis tempor nunc ultricies feugiat dignissim venenatis. Varius eleifend leo auctor quam molestie tortor gravida pharetra. Nullam nullam ac urna sodales semper id sagittis lectus. Nullam faucibus eget quis ultricies ornare. Malesuada pretium sagittis amet, sit posuere.",console.log("about us"),t(a)}),{once:!0}),window.addEventListener("scroll",(function(){0==window.scrollY&&(i.classList.remove("logo-scroll"),i.classList.add("heading")),0!==window.scrollY&&i.classList.add("logo-scroll")})),console.log("Navbar"),N.textContent="The best restraunt in the north america!",E.src="../assets/restarent.jpg",g.textContent="Buffet Now Available!!",f.textContent="Lorem ipsum!",L.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nulla ultrices sociis vitae, scelerisque ut eget congue. A luctus rhoncus condimentum ipsum nec purus sapien proin. ",D.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nulla ultrices sociis vitae, scelerisque ut eget congue. A luctus rhoncus condimentum ipsum nec purus sapien proin. ",console.log("front Page"),e(h),t(h)})();
