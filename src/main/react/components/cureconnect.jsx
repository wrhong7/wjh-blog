import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import projectProcessImage from "../../resources/proDevMap1.png";
import projectProcessImage2 from "../../resources/proDevMap2.png"

export default class Cureconnect extends React.Component {
  render() {
    return (
      <div className="cureconnect-page-wrapper">

        <div className="pageHeader">
          <div className="project-synopsis">
            <div className="synopsis-header">
              Summary
            </div>
            <div className="synopsis-content">
              Q: How are we going to resolve nursing shortage in underfunded intercity and rural hospitals?<br/><br/>
              A: If we can develop a platform that introduces local part-time nursing positions to nurses, that can (1) reduce nurse recruiting costs and (2) alleviate financial constraints on many underfunded intercity and rural hospitals.
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="project-paragraph project-key-idea-1">
            <div className="project-paragraph-header">
              The Problem
            </div>
            <img src={projectProcessImage2} className="cureconnect-image-1" />
            <div className="synopsis-content">
              <div className="synopsis-content-paragraph">
                Despite a common myth, America has enough healthcare providers.
                The challenge is, not many wants to work in rural, intercity, or underfunded hospitals.
                he poorer an hospital is, the harder for them to recruit providers.
                They will have to pay more in recruiting fee and provider compensations.
                This results in poorer hospitals end up spending more on recruiting; it is a vicious cycle.
              </div>
              <div className="synopsis-content-paragraph">
                To overcome this issue, my partner and I investigated
                this problem and interviewed dozens of providers to understand what could be a solution.
                Can we solve this problem with technology somehow? Can we increase the job market supply for nurses?
              </div>
              <div className="project-paragraph-header">
                Hypothesis 1
              </div>
              <div className="synopsis-content-paragraph">
                If we can onboard the experienced but retired nurses* to our platform,
                hospitals can reduce (1) recruiting costs and (2) labor costs.
              </div>
              <div className="project-paragraph-header">
                Hypothesis 2
              </div>
              <div className="synopsis-content-paragraph">
                Nurses typically work three days a week (12 hour shift) at large hospitals.
                If we can on-board them for part time job for the remainder of the week,
                that would be a winning deal for everyone.
              </div>
              <div className="project-paragraph-subnote">
                *Our research indicated that technology platform may work if we can actively on-board experienced
                (but retired) nurses to the local job market platform.<br/><br/>

                Nurses do have a relatively high dropout rates since (1) the sector is dominated by females,
                (2) many become middle and upper middle class families,
                and (3) they have a high job market dropout rate as child rearing becomes an issue. <br/><br/>

                We came up with a conclusion--if we can develop a platform that introduces local part-time
                nursing positions to nurses, that can (1) reduce nurse recruiting costs and (2)
                alleviate financial constraints on many underfunded intercity and rural hospitals.<br/>
              </div>
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="project-paragraph project-key-idea-2">
            <div className="project-paragraph-header">
              Project Process
            </div>
            <img src={projectProcessImage} className="cureconnect-image-2" />
            <div className="synopsis-content-paragraph">
              Lorem ipsum olor sit amet, consectetur adipiscing elit. Curabitur a suscipit nibh. Vivamus malesuada lectus in pretium interdum. Mauris felis quam, venenatis ac placerat sit amet, convallis sed felis. Aenean tincidunt a diam gravida dictum. Maecenas ac congue ante. Morbi massa neque, volutpat et elit quis, semper faucibus turpis. Sed semper gravida hendrerit. Quisque et risus sem. Maecenas ac leo ac libero sagittis commodo.
            </div>
            <div className="synopsis-content-paragraph">
              Lorem ipsum olor sit amet, consectetur adipiscing elit. Curabitur a suscipit nibh. Vivamus malesuada lectus in pretium interdum. Mauris felis quam, venenatis ac placerat sit amet, convallis sed felis. Aenean tincidunt a diam gravida dictum. Maecenas ac congue ante. Morbi massa neque, volutpat et elit quis, semper faucibus turpis. Sed semper gravida hendrerit. Quisque et risus sem. Maecenas ac leo ac libero sagittis commodo.
            </div>
            <div className="synopsis-content-paragraph">
              Lorem ipsum olor sit amet, consectetur adipiscing elit. Curabitur a suscipit nibh. Vivamus malesuada lectus in pretium interdum. Mauris felis quam, venenatis ac placerat sit amet, convallis sed felis. Aenean tincidunt a diam gravida dictum. Maecenas ac congue ante. Morbi massa neque, volutpat et elit quis, semper faucibus turpis. Sed semper gravida hendrerit. Quisque et risus sem. Maecenas ac leo ac libero sagittis commodo.
            </div>
            <div className="synopsis-content-paragraph">
              Lorem ipsum olor sit amet, consectetur adipiscing elit. Curabitur a suscipit nibh. Vivamus malesuada lectus in pretium interdum. Mauris felis quam, venenatis ac placerat sit amet, convallis sed felis. Aenean tincidunt a diam gravida dictum. Maecenas ac congue ante. Morbi massa neque, volutpat et elit quis, semper faucibus turpis. Sed semper gravida hendrerit. Quisque et risus sem. Maecenas ac leo ac libero sagittis commodo.
            </div>
          </div>
        </div>

      </div>
    )
  }
}