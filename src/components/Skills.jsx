import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Html from '../assets/img/Html.svg';
import Css from '../assets/img/Css.svg';
import Js from '../assets/img/Js.svg';
import Tailwind from '../assets/img/Tailwind.svg';
import Next from '../assets/img/Next.svg';
import ReactIcon from '../assets/img/React.svg';
import ReactRouter from '../assets/img/React-router.svg';
import Redux from '../assets/img/Redux.svg';
import Node from '../assets/img/Node.svg';
import Angular from '../assets/img/Angular.svg';
import Go from '../assets/img/Go.svg';
import Jquery from '../assets/img/Jquery.svg';
import Storybook from '../assets/img/Storybook.svg';
import Docker from '../assets/img/Docker.svg';
import MaterialUI from '../assets/img/Material-ui.svg';
import Scss from '../assets/img/Scss.svg';
import Antd from '../assets/img/Antd.svg';
import BootstrapIcon from '../assets/img/Bootstraplogo.svg';
import CiCd from '../assets/img/CiCd.svg';
import Jwt from '../assets/img/Jwt.svg';
import Kubernets from '../assets/img/Kubernets.svg';
import Mongo from '../assets/img/Mongo.svg';
import OAuth from '../assets/img/Oauth.svg';
import ReactHookForm from '../assets/img/React-hook-form.svg';
import TanStack from '../assets/img/React-querylogo.png';
import Shadn from '../assets/img/Shadn.png';
import Socket from '../assets/img/Socket.svg';
import Sql from '../assets/img/Sql.svg';
import Webpack from '../assets/img/Webpack.svg';
import Java from '../assets/img/Java.png';
import Spring from '../assets/img/Spring.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h1>Skills</h1>
                        <p>These are the technologies I'm currently using.</p>
                        <div className="skill-images">
                          <img src={Html} alt="Html" />
                          <img src={Css} alt="Css" />
                          <img src={Tailwind} alt="Tailwind" />
                          <img src={Scss} alt="Scss" />
                          <img src={BootstrapIcon} alt="Bootstrap" />
                          <img src={Js} alt="Js" />
                          <img src={Jquery} alt="jQuery" />
                          <img src={ReactIcon} alt="React" />
                          <img src={ReactRouter} alt="React Router" />
                          <img src={Redux} alt="Redux" />
                          <img src={ReactHookForm} alt="React Hook Form" />
                          <img src={TanStack} alt="TanStack Query" />
                          <img src={MaterialUI} alt="Material-UI" />
                          <img src={Antd} alt="Ant Design" />
                          <img src={Shadn} alt="Shadn" />
                          <img src={Next} alt="Next.js" />
                          <img src={Storybook} alt="Storybook" />
                          <img src={Node} alt="Node.js" />         
                          <img src={Jwt} alt="JWT" />
                          <img src={OAuth} alt="OAuth" />                     
                          <img src={Socket} alt="Socket" />
                          <img src={Mongo} alt="MongoDB" />
                          <img src={Sql} alt="SQL" />
                          <img src={Webpack} alt="Webpack" />
                          <div>
                          <p>These are the technologies I will learn in the future.</p>
                            <div className="sub-skill">
                              <img src={Docker} alt="Docker" />
                              <img src={Kubernets} alt="Kubernetes" />
                              <img src={CiCd} alt="CI/CD" />
                              <img src={Angular} alt="Angular" />
                              <img src={Go} alt="Go" />
                              <img src={Java} alt="Java" />
                              <img src={Spring} alt="Spring" />

                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
