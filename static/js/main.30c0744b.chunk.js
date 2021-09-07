(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),s=(t(13),t(1)),i=t(2),m=t(4),o=t(3),u=t(5),p=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.role,". ",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,"Name : ",e.name),l.a.createElement("br",null),l.a.createElement("span",null,"Phone : ",e.phone),l.a.createElement("br",null),l.a.createElement("span",null,"Addr : ",e.address),l.a.createElement("br",null),l.a.createElement("span",null,"Email : ",e.email)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements,l.a.createElement("br",null),e.SecondsAchievements,l.a.createElement("br",null),null!=e.ThridAchievements&&e.ThridAchievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Linked in :",e.linkedinId)))))}}]),a}(n.Component),b=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),N={imagebaseurl:"https://kim911003.github.io/",name:"KimHyungJoon",role:"\uac89\uc73c\ub85c\ub9cc \ud654\ub824\ud55c \uac1c\ubc1c\uc790\uac00 \uc544\ub2cc, \ucd5c\uc801\ud654\ub41c \uc2dc\uc2a4\ud15c\uc744 \uc548\uc815\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc81c\uacf5\ud558\uace0 \ud68c\uc0ac\uc640 \ud568\uaed8 \ub098\uc544\uac08 \uc218 \uc788\ub294 \uc778\uc7ac\uac00 \ub418\uaca0\uc2b5\ub2c8\ub2e4.",linkedinId:"Your LinkedIn Id",skypeid:"Your skypeid",email:"joon1077@naver.com",phone:"010-9291-4151",roleDescription:"",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/rahul-bhatia-67ba08121/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/rbhatia46",className:"fa fa-github"},{name:"skype",url:"http://twitter.com/rbhatia46",className:"fa fa-twitter"}],aboutme:"\uc800\ub294 \uc0ac\ubc94\ub300\ud559\uad50 \ucef4\ud4e8\ud130\uad50\uc721\uacfc\ub97c \uc878\uc5c5\ud558\uace0, \ucde8\ubbf8\ub85c \uc990\uae30\ub358 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc804\ubb38\uc801\uc73c\ub85c \ub2e4\ub8e8\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. \uad6d\ube44 \uc9c0\uc6d0\uc744 \ud1b5\ud574 \ucc98\uc74c \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ubc30\uc6b0\uace0, \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uc2e4\ubb34 \ub2a5\ub825\uc744 \ub04c\uc5b4\uc62c\ub9b0 \ub4a4 \uc9c4\ud589\ud558\ub294 \uc5ec\ub7ec \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucc38\uc5ec\ub97c \ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ucc98\uc74c\ubd80\ud130 \uc798\ud558\uc9c4 \ubabb\ud558\uc600\uc9c0\ub9cc, \ub204\uad6c\ubcf4\ub2e4\ub3c4 \uc2a4\uc2a4\ub85c\uac00 \ubd80\uc871\ud55c \uc810\uc774 \ubb34\uc5c7\uc778\uc9c0 \uc54c\uae30\uc5d0 \ube60\ub974\uac8c \uce90\uce58\ud558\uc5ec \ud300\uc6d0\ub4e4\uacfc \ud611\uc5c5\ud560 \uc218 \uc788\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \uc800\ub294 \uc2e0\uae30\uc220\uc5d0 \ub300\ud55c \uac70\ubd80\uac10\uc774 \uc5c6\uace0 \uae30\uc5c5\uc5d0\uc11c \uc6d0\ud558\ub294 \uae30\uc220\uc744 \ube60\ub974\uac8c \uc2b5\ub4dd\ud558\uc5ec \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud604\uc7ac \uae30\uc5c5\uc5d0\uc11c \uc9c4\ud589\ud558\ub294 \ub2e4\uc591\ud55c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucc38\uc5ec\ud574 \uac1c\ubc1c\uacfc \uc720\uc9c0\ubcf4\uc218\ub97c \ud574\ub098\uac00\uace0 \uc788\uc73c\uba70, \uac1c\uc778\uc801\uc778 \uc2dc\uac04\uc5d0\ub294 React.js\uc640 Node.js\uc5d0 \ub300\ud55c \uae30\uc220\uc5d0 \ub300\ud574 \uc54c\uc544\uac00\uace0 \uc788\uc2b5\ub2c8\ub2e4.",address:"\uacbd\uae30\ub3c4 \uad6c\ub9ac\uc2dc \uc218\ud0dd\ub3d9",website:"https://kim911003.github.io",education:[{UniversityName:"KOSTA EDU - \ud55c\uad6d\uc18c\ud504\ud2b8\uc6e8\uc5b4\uae30\uc220\uc9c4\ud765\ud611\ud68c",specialization:"\uad50\uc721\uc77c\uc790",MonthOfPassing:"September",YearOfPassing:"2018 - January 2019",Achievements:"Java & Web Programming Education"},{UniversityName:"\uac00\ud1a8\ub9ad \uad00\ub3d9\uc0ac\ubc94\ub300\ud559\uad50 \ucef4\ud4e8\ud130\uad50\uc721\uacfc",specialization:"\uc878\uc5c5\uc77c\uc790",MonthOfPassing:"February",YearOfPassing:"2020",Achievements:"Database, C language basics, Algorithm Training"}],work:[{CompanyName:"(\uc8fc)\uc6b0\ub9bc\uc778\ud3ec\ud14d",specialization:"\uc5c5\ubb34\uacbd\ub825",MonthOfLeaving:"May",YearOfLeaving:"2019 - January 2020",Achievements:" - \ub18d\uc815\uc6d0 \uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218",SecondsAchievements:" - \ub3c4\ub9e4\uc2dc\uc7a5 \uc6f9 \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218"},{CompanyName:"(\uc8fc)B4B & (\uc8fc)\ud050\ube0c\ub9ad\ucf54\ud37c\ub808\uc774\uc158",specialization:"\uc5c5\ubb34\uacbd\ub825",MonthOfLeaving:"January",YearOfLeaving:"2020 - Now",Achievements:" - QR\uc778\uc99d\uc2dc\uc2a4\ud15c \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218",SecondsAchievements:" - \ucd9c\ud1f4\uadfc \uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218",ThridAchievements:" - \uc790\uc0ac \uad11\uace0 \ud50c\ub7ab\ud3fc \uac1c\ubc1c"}],skillsDescription:"Your skills here",skills:[{skillname:"java"},{skillname:"javascript "},{skillname:"jquery "},{skillname:"sql"},{skillname:"Reactjs"},{skillname:"Nodejs"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},g=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:N}),l.a.createElement(E,{resumeData:N}),l.a.createElement(h,{resumeData:N}),l.a.createElement(d,{resumeData:N}),l.a.createElement(v,{resumeData:N}),l.a.createElement(f,{resumeData:N}),l.a.createElement(b,{resumeData:N}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.30c0744b.chunk.js.map