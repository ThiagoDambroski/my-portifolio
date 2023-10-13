
//React Portifolio architecture-portfolio
import HomeComponent from '../assets/images/architecture-portfolio/HomePage/HomePage.png'
import Page1Component from '../assets/images/architecture-portfolio/HomePage/Page1Component.png'
import Content from '../assets/images/architecture-portfolio/HomePage/Content.png'
import ContentCss from '../assets/images/architecture-portfolio/HomePage/ContentCss.png'
//Page 2
import Page2Component from '../assets/images/architecture-portfolio/Page2/Page2Component.png'
import Page2 from '../assets/images/architecture-portfolio/Page2/Page2.png'
import ContentPage2 from '../assets/images/architecture-portfolio/Page2/ContentPage2.png'
import ContentPage2Css from '../assets/images/architecture-portfolio/Page2/ContentPage2Css.png'
//Menu Bar
import MenuBar from '../assets/images/architecture-portfolio/NavBar/MenuBar.png'
import MenuBarComponent from '../assets/images/architecture-portfolio/NavBar/MenuBarComponent.png'
import MenuBarCss from '../assets/images/architecture-portfolio/NavBar/MenuBarCss.png'
//About Me
import AboutMe from '../assets/images/architecture-portfolio/About Me/AboutMe.png'
import AboutMeComponent from '../assets/images/architecture-portfolio/About Me/AboutMeComponent.png'
import MeComponent from '../assets/images/architecture-portfolio/About Me/MeComponent.png'
import AboutMeCss from '../assets/images/architecture-portfolio/About Me/AboutMeCss.png'
//FQA
import FQA from '../assets/images/architecture-portfolio/FQA/FQA.png'
import FQAComponent from '../assets/images/architecture-portfolio/FQA/FQAComponent.png'
import QuestionComponent from '../assets/images/architecture-portfolio/FQA/QuestionComponent.png'
import FQACss from '../assets/images/architecture-portfolio/FQA/FQACss.png'
//ContactFooter
import ContactFooter from '../assets/images/architecture-portfolio/ContactFooter/ContactFooter.png'
import ContactFooterComponent from '../assets/images/architecture-portfolio/ContactFooter/ContactFooterComponent.png'
import SectionComponent from '../assets/images/architecture-portfolio/ContactFooter/SectionComponent.png'
import FooterCss from '../assets/images/architecture-portfolio/ContactFooter/FooterCss.png'
//ProjectsTypes
import ProjectsTypes from '../assets/images/architecture-portfolio/ProjectTypes/ProjectTypes.png'
import ProjectsTypesComponent from '../assets/images/architecture-portfolio/ProjectTypes/ProjectTypesComponent.png'
import TypeComponent from '../assets/images/architecture-portfolio/ProjectTypes/TypeComponent.png'
import ProjectCss from '../assets/images/architecture-portfolio/ProjectTypes/ProjectsCss.png'
//ProjectsPage
import ProjectsPage from '../assets/images/architecture-portfolio/ProjectsPage/ProjectPages.png'
import ProjectsPageComponent from '../assets/images/architecture-portfolio/ProjectsPage/ProjectsPageComponent.png'
import TypeBig from '../assets/images/architecture-portfolio/ProjectsPage/TypeBigComponent.png'

//App js
import App from '../assets/images/architecture-portfolio/App/App.png'
import AppComponent from '../assets/images/architecture-portfolio/App/AppComponent.png'
import HomeJSComponent from '../assets/images/architecture-portfolio/App/HomeComponent.png'

//Icon Image
import reactIcon from '../assets/images/icon/programs icon/react.png'


const architectFrontEnd =
    {
        id: 2,
        title: "Portfolio architect | React",
        gitLink: "https://github.com/ThiagoDambroski/portifolio-claudio-manguinho-react",
        description: "This portfolio offers a exploration of the code and components for an React-based web application,"+
        "specifically tailored for showcasing architectural projects. Within each section, you'll find an  breakdown of "
        +"component codes, complete with corresponding images of these components.",
        image: [HomeComponent,Page2,AboutMe,FQA,ContactFooter,ProjectsTypes,App],
        type: 2, // TYPE 2 : FRONT ,
        navLink:"/frontEndProjectArchitectPortifolio",
        iconImage: reactIcon ,
        informationPage: {
            siteLink: "https://thiagodambroski.github.io/portifolio-claudio-manguinho-react/" ,
            componentsImages: [
                [HomeComponent,Page1Component,Content,ContentCss],
                [Page2,Page2Component,ContentPage2,ContentPage2Css],
                [MenuBar,MenuBarComponent,MenuBarCss],
                [AboutMe,AboutMeComponent,MeComponent,AboutMeCss],
                [FQA,FQAComponent,QuestionComponent,FQACss],
                [ContactFooter,ContactFooterComponent,SectionComponent,FooterCss],
                [ProjectsTypes,ProjectsTypesComponent,TypeComponent,ProjectCss],
                [ProjectsPage,ProjectsPageComponent,TypeBig,ProjectCss],
                [App,AppComponent,HomeJSComponent]
    
            
            ],
            components:["Page 1","Page 2","Menu Bar","About Me","Frequently Questioned Answers","Contact Footer",
            "Project Types","Project Page","App.js"]
        }
    }

export default architectFrontEnd