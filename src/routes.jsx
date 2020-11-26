import React from "react";
import { Route } from "react-router-dom";

import {Home} from './component/home';
import {Question1} from './component/q1';
import {InitialForm} from './component/initialForm';
import {Forum} from './component/forum';
import {GenDev2} from './component/gd2';
import {GenDev3} from './component/gd3';
import {GenDev4} from './component/gd4';
import {GenDev5} from './component/gd5';
import {Academics} from './component/academics';
import {Speech} from './component/speech';
import {Behavior} from './component/behavior';
import {Mental} from './component/mental';
import {Above5} from './component/above5';
import {Age} from './component/age';
import {Personal} from './component/personal';
import {Login} from './component/login';
import {SignUp} from './component/signup';
import {CheckOut} from './component/checkout';

const BaseRouter = () => (
  <div>
    
    <Route exact path="/" component={Home} />
    <Route exact path="/q1/" component={Question1} />
    <Route exact path="/initial/" component={InitialForm} />
    <Route exact path="/forum/" component={Forum} />
    <Route exact path="/gendev2/" component={GenDev2} />
    <Route exact path="/gendev3/" component={GenDev3} />
    <Route exact path="/gendev4/" component={GenDev4} />
    <Route exact path="/gendev5/" component={GenDev5} />
    <Route exact path="/academics/" component={Academics} />
    <Route exact path="/speech/" component={Speech} />
    <Route exact path="/behavior/" component={Behavior} />
    <Route exact path="/mental/" component={Mental} />
    <Route exact path="/above5/" component={Above5} />
    <Route exact path="/age/" component={Age} />
    <Route exact path="/result/" component={Personal} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={SignUp} />
    <Route exact path="/checkout/" component={CheckOut} />


    {/* <Route exact path="/signup/" component={Signup} />
    <Route exact path="/assignments/:id" component={AssignmentDetail} />
    <Route exact path="/profile/:id" component={Profile} /> */}
  </div>
);

export default BaseRouter;
