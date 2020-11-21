

import React ,{useEffect, useState, useCallback, useRef}from "react";

import {MenuLayout} from './menu';


export const Forum = ()=> {




return (
    <div>

            {/* <div class="se-pre-con"></div> */}
		
        <div class="jumbotron forum-header bgimg">
        <MenuLayout/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-12">	
                                <h1>Forum</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                 <div class="form-group has-search forum-search">
                                    <span class="fa fa-search form-control-feedback"></span>
                                    <input type="text" class="form-control" placeholder="Search"/>
                                  </div>
                            </div>
                            <div class="col-md-6">
                                <div class="stat">
                                    <div class="stat-item">
                                        <h2>345</h2>
                                        <p>Threads</p>
                                    </div>
                                    <div class="stat-item red">
                                        <h2>345</h2>
                                        <p>Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div class="infobar jumbotron">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <p style={{color: "#fff"}}>Please keep all discuss on the platform respectful and within our <a href="#">guidelines</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="thread jumbotron">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="content">
                            <h2>All Threads</h2>
                            <div class="filter-action">
                                <p>Filter by</p>
                                <select class="myselect"><option>Category</option></select>
                            </div>
        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thread jumbotron tabsec">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        
                            <nav class="nav nav-pills nav-justified mytab">
                              <a class="nav-item nav-link active" data-toggle="tab" href="#expert" role="tab" aria-controls="home" aria-selected="true" >Sendpro Experts</a>
                              <a class="nav-item nav-link" data-toggle="tab" role="tab" aria-controls="home" aria-selected="false" href="#community">Community</a>
                              <a class="nav-item nav-link " data-toggle="tab" role="tab" aria-controls="home" aria-selected="false" href="#all">All</a>
                            </nav>
                            
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content" id="myTabContent">
             <div class="tab-pane fade show active" id="expert" role="tabpanel" aria-labelledby="home-tab">
                <div id="accordion">
                    
                    {/* <!-- connet begin --> */}
        
        
        
                    <div class="">
                        <div class="topic jumbotron">
                            <div class="container-fluid">
                              <h4>Is my child healthy ?</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        
                              <div class="topic-meta">
                                  <div class="leftmeta">
                                      <p>Ada Adamu</p>
                                      <p class="post-type new">New</p>
                                      <p>Added Jan 22. 2020, 10:23pm</p>
                                  </div>
                                  <div class="leftmeta">
                                      <p><i class="fa fa-eye"></i> 10 views</p>
                                      <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                      <p><i class="fa fa-comment"></i> 5 Comments</p>
                                      
                                      <button class="btn btn-primary post-toggler" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapseOne">
                                     <i class="fa fa-plus toggler"></i>
                                    </button>
                                  </div>
                              </div>
                          </div>
                         </div>
                               <div id="collapse" class="collapse greybg " aria-labelledby="headingOne" data-parent="#accordion">
                                   <div class="jumbotron comment">
                                       <div class="container-fluid">
                                           <div class="row">
                                               <div class="col-12">
                                              <div class="card-body">
                                                  <div class="">
                                                      <p>
                                                occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                <div class="topic-meta">
                                                      <div class="leftmeta">
                                                          <p>Ada Adamu</p>
                                                          <p class="post-type regular">Regular</p>
                                                          <p>Added Jan 22. 2020, 10:23pm</p>
                                                      </div>
                                                      <div class="leftmeta">
                                                          <p><i class="fa fa-eye"></i> 10 views</p>
                                                          <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                                          <p><i class="fa fa-comment"></i> 5 Comments</p>
                                                          
                                                          
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                             </div>
                                         </div>
                                  </div>
                            </div>
        
        
        
                            {/* <!-- Another commnet --> */}
        
        
                            <div class="jumbotron comment">
                                       <div class="container-fluid">
                                           <div class="row">
                                               <div class="col-12">
                                              <div class="card-body">
                                                  <div class="">
                                                      <p class="quote">
                                                          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                                                      </p>
                                                      <p>
                                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru</p>
                                                <div class="topic-meta">
                                                      <div class="leftmeta">
                                                          <p>Ada Adamu</p>
                                                          <p class="post-type admin">Admin</p>
                                                          <p>Added Jan 22. 2020, 10:23pm</p>
                                                      </div>
                                                      <div class="leftmeta">
                                                          <p><i class="fa fa-eye"></i> 10 views</p>
                                                          <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                                          <p><i class="fa fa-comment"></i> 5 Comments</p>
                                                          
                                                          
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                             </div>
                                         </div>
                                  </div>
                            </div>
        
                            {/* <!-- end of commnet --> */}
        
        
        
        
        
                            </div>	
                          
        
                    </div>
        
        
                    {/* <!-- ed comment -->					 */}
        
        
                    <div class="">
                        <div class="topic jumbotron">
                            <div class="container-fluid">
                              <h4>Is my child healthy ?</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        
                              <div class="topic-meta">
                                  <div class="leftmeta">
                                      <p>Ada Adamu</p>
                                      <p class="post-type new">New</p>
                                      <p>Added Jan 22. 2020, 10:23pm</p>
                                  </div>
                                  <div class="leftmeta">
                                      <p><i class="fa fa-eye"></i> 10 views</p>
                                      <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                      <p><i class="fa fa-comment"></i> 5 Comments</p>
                                      
                                      <button class="btn btn-primary post-toggler" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapseOne">
                                     <i class="fa fa-minus toggler"></i>
                                    </button>
                                  </div>
                              </div>
                          </div>
                         </div>
                               <div id="collapse2" class="collapse greybg show" aria-labelledby="headingOne" data-parent="#accordion">
                                   <div class="jumbotron comment">
                                       <div class="container">
                                           <div class="row">
                                               <div class="col-12">
                                              <div class="card-body">
                                                  <div class="">
                                                      <p>
                                                occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                <div class="topic-meta">
                                                      <div class="leftmeta">
                                                          <p>Ada Adamu</p>
                                                          <p class="post-type regular">Regular</p>
                                                          <p>Added Jan 22. 2020, 10:23pm</p>
                                                      </div>
                                                      <div class="leftmeta">
                                                          <p><i class="fa fa-eye"></i> 10 views</p>
                                                          <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                                          <p><i class="fa fa-comment"></i> 5 Comments</p>
                                                          
                                                          
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                             </div>
                                         </div>
                                  </div>
                            </div>
        
        
        
                            {/* <!-- Another commnet --> */}
        
        
                            <div class="jumbotron comment">
                                       <div class="container-fluid">
                                           <div class="row">
                                               <div class="col-12">
                                              <div class="card-body">
                                                  <div class="">
                                                      <p class="quote">
                                                          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                                                      </p>
                                                      <p>
                                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru</p>
                                                <div class="topic-meta">
                                                      <div class="leftmeta">
                                                          <p>Ada Adamu</p>
                                                          <p class="post-type admin">Admin</p>
                                                          <p>Added Jan 22. 2020, 10:23pm</p>
                                                      </div>
                                                      <div class="leftmeta">
                                                          <p><i class="fa fa-eye"></i> 10 views</p>
                                                          <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                                          <p><i class="fa fa-comment"></i> 5 Comments</p>
                                                          
                                                          
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                             </div>
                                         </div>
                                  </div>
                            </div>
        
                            {/* <!-- end of commnet --> */}
        
        
        
        
        
                            </div>	
                          
        
                    </div>
                </div>
            </div>
            
        
        
        
        
            <div class="tab-pane fade show active" id="community" role="tabpanel" aria-labelledby="home-tab">
                <div id="accordion">
                    
                    {/* <!-- connet begin --> */}
        
        
        
                    <div class="">
                        <div class="topic jumbotron">
                            <div class="container-fluid">
                              <h4>Is my child healthy ?</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        
                              <div class="topic-meta">
                                  <div class="leftmeta">
                                      <p>Ada Adamu</p>
                                      <p class="post-type new">New</p>
                                      <p>Added Jan 22. 2020, 10:23pm</p>
                                  </div>
                                  <div class="leftmeta">
                                      <p><i class="fa fa-eye"></i> 10 views</p>
                                      <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                      <p><i class="fa fa-comment"></i> 5 Comments</p>
                                      
                                      <button class="btn btn-primary post-toggler" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapseOne">
                                     <i class="fa fa-plus toggler"></i>
                                    </button>
                                  </div>
                              </div>
                          </div>
                         </div>
                               <div id="collapse" class="collapse greybg " aria-labelledby="headingOne" data-parent="#accordion">
                                   <div class="jumbotron comment">
                                       <div class="container-fluid">
                                           <div class="row">
                                               <div class="col-12">
                                              <div class="card-body">
                                                  <div class="">
                                                      <p>
                                                occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                <div class="topic-meta">
                                                      <div class="leftmeta">
                                                          <p>Ada Adamu</p>
                                                          <p class="post-type regular">Regular</p>
                                                          <p>Added Jan 22. 2020, 10:23pm</p>
                                                      </div>
                                                      <div class="leftmeta">
                                                          <p><i class="fa fa-eye"></i> 10 views</p>
                                                          <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                                          <p><i class="fa fa-comment"></i> 5 Comments</p>
                                                          
                                                          
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                             </div>
                                         </div>
                                  </div>
                            </div>
        
        
        
                            {/* <!-- Another commnet --> */}
        
        
                            <div class="jumbotron comment">
                                       <div class="container-fluid">
                                           <div class="row">
                                               <div class="col-12">
                                              <div class="card-body">
                                                  <div class="">
                                                      <p class="quote">
                                                          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                                                      </p>
                                                      <p>
                                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru</p>
                                                <div class="topic-meta">
                                                      <div class="leftmeta">
                                                          <p>Ada Adamu</p>
                                                          <p class="post-type admin">Admin</p>
                                                          <p>Added Jan 22. 2020, 10:23pm</p>
                                                      </div>
                                                      <div class="leftmeta">
                                                          <p><i class="fa fa-eye"></i> 10 views</p>
                                                          <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                                          <p><i class="fa fa-comment"></i> 5 Comments</p>
                                                          
                                                          
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                             </div>
                                         </div>
                                  </div>
                            </div>
        
                            {/* <!-- end of commnet --> */}
        
        
        
        
        
                            </div>	
                          
        
                    </div>
        
        
                    {/* <!-- ed comment -->					 */}
        
        
                    <div class="">
                        <div class="topic jumbotron">
                            <div class="container-fluid">
                              <h4>Is my child healthy ?</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        
                              <div class="topic-meta">
                                  <div class="leftmeta">
                                      <p>Ada Adamu</p>
                                      <p class="post-type new">New</p>
                                      <p>Added Jan 22. 2020, 10:23pm</p>
                                  </div>
                                  <div class="leftmeta">
                                      <p><i class="fa fa-eye"></i> 10 views</p>
                                      <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                      <p><i class="fa fa-comment"></i> 5 Comments</p>
                                      
                                      <button class="btn btn-primary post-toggler" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapseOne">
                                     <i class="fa fa-minus toggler"></i>
                                    </button>
                                  </div>
                              </div>
                          </div>
                         </div>
                               <div id="collapse2" class="collapse greybg show" aria-labelledby="headingOne" data-parent="#accordion">
                                   <div class="jumbotron comment">
                                       <div class="container">
                                           <div class="row">
                                               <div class="col-12">
                                              <div class="card-body">
                                                  <div class="">
                                                      <p>
                                                occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                <div class="topic-meta">
                                                      <div class="leftmeta">
                                                          <p>Ada Adamu</p>
                                                          <p class="post-type regular">Regular</p>
                                                          <p>Added Jan 22. 2020, 10:23pm</p>
                                                      </div>
                                                      <div class="leftmeta">
                                                          <p><i class="fa fa-eye"></i> 10 views</p>
                                                          <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                                          <p><i class="fa fa-comment"></i> 5 Comments</p>
                                                          
                                                          
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                             </div>
                                         </div>
                                  </div>
                            </div>
        
        
        
                            {/* <!-- Another commnet --> */}
        
        
                            <div class="jumbotron comment">
                                       <div class="container-fluid">
                                           <div class="row">
                                               <div class="col-12">
                                              <div class="card-body">
                                                  <div class="">
                                                      <p class="quote">
                                                          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                                                      </p>
                                                      <p>
                                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru</p>
                                                <div class="topic-meta">
                                                      <div class="leftmeta">
                                                          <p>Ada Adamu</p>
                                                          <p class="post-type admin">Admin</p>
                                                          <p>Added Jan 22. 2020, 10:23pm</p>
                                                      </div>
                                                      <div class="leftmeta">
                                                          <p><i class="fa fa-eye"></i> 10 views</p>
                                                          <p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
                                                          <p><i class="fa fa-comment"></i> 5 Comments</p>
                                                          
                                                          
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                             </div>
                                         </div>
                                  </div>
                            </div>
        
                            {/* <!-- end of commnet --> */}
        
        
        
        
        
                            </div>	
                          
        
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="all" role="tabpanel" aria-labelledby="contact-tab">maybe</div>
        </div>
        
        




    </div>


)

}
