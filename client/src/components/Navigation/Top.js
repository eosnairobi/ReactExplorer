import React, { Component } from "react";

export default class Top extends Component {
  render() {
    return (
      <div class="navbar-inverse navbar navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="current navbar-brand" href="../index.html">
              <img
                alt="Spin Logo Inverted"
                class="h-20"
                src="../assets/images/spin-logo-inverted-@2X.png"
              />
            </a>
            <button
              class="action-right-sidebar-toggle navbar-toggle collapsed"
              data-target="#navdbar"
              data-toggle="collapse"
              type="button"
            >
              <i class="fas fa-fw fa-align-right text-white" />
            </button>
            <button
              class="navbar-toggle collapsed"
              data-target="#navbar"
              data-toggle="collapse"
              type="button"
            >
              <i class="fas fa-fw fa-user text-white" />
            </button>
            <button
              class="action-sidebar-open navbar-toggle collapsed"
              type="button"
            >
              <i class="fas fa-fw fa-bars text-white" />
            </button>
          </div>

          <div class="collapse navbar-collapse" id="navbar">
            {/* <!-- START Search Mobile --> */}
            <div class="form-group hidden-lg hidden-md hidden-sm">
              <div class="input-group hidden-lg hidden-md">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for..."
                />
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="button">
                    <i class="fas fa-fw fa-search" />
                  </button>
                </span>
              </div>
            </div>
            {/* <!-- END Search Mobile --> */}

            {/* <!-- START Left Side Navbar --> */}
            <ul class="nav navbar-nav navbar-left clearfix yamm">
              {/* <!-- START Switch Sidebar ON/OFF --> */}
              <li id="sidebar-switch" class="hidden-xs">
                <a
                  class="action-toggle-sidebar-slim"
                  data-placement="bottom"
                  data-toggle="tooltip"
                  href="#"
                  title="Slim sidebar on/off"
                >
                  <i class="fas fa-lg fa-bars fa-fw" />
                </a>
              </li>
              {/* <!-- END Switch Sidebar ON/OFF --> */}

              <li class="spin-search-box clearfix hidden-xs">
                <a href="#" class="pull-left">
                  <i class="fas fa-search fa-lg icon-inactive" />
                  <i class="fas fa-close fa-lg icon-active" />
                </a>
                <div class="input-group input-group-sm pull-left p-10">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search for..."
                  />
                  <span class="input-group-btn">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search" />
                    </button>
                  </span>
                </div>
              </li>
            </ul>
            {/* <!-- START Left Side Navbar --> */}

            {/* <!-- START Right Side Navbar --> */}
            <ul class="nav navbar-nav navbar-right">
              <li
                role="separator"
                class="divider hidden-lg hidden-md hidden-sm"
              />
              <li class="dropdown-header hidden-lg hidden-md hidden-sm text-gray-lighter text-uppercase">
                <strong>Your Profile</strong>
              </li>

              {/* <!-- START Notification --> */}
              <li class="dropdown">
                {/* <!-- START Icon Notification with Badge (10)--> */}
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                >
                  <i class="fas fa-lg fa-fw fa-bell hidden-xs" />
                  <span class="hidden-sm hidden-md hidden-lg">
                    Notifications
                    <span class="badge badge-primary m-l-1">10</span>
                  </span>
                  <span class="label label-primary label-pill label-with-icon hidden-xs">
                    10
                  </span>
                  <span class="fas fa-fw fa-angle-down hidden-lg hidden-md hidden-sm" />
                </a>
                {/* <!-- END Icon Notification with Badge (10)--> */}

                {/* <!-- START Notification Dropdown Menu --> */}
                <ul class="dropdown-menu dropdown-menu-right p-t-0 b-t-0 p-b-0 b-b-0 b-a-0">
                  <li>
                    <div class="yamm-content p-t-0 p-r-0 p-l-0 p-b-0">
                      <ul class="list-group m-b-0 b-b-0">
                        <li class="list-group-item b-r-0 b-l-0 b-r-0 b-t-r-0  b-t-l-0 b-b-2 w-350">
                          <small class="text-uppercase">
                            <strong>Notifications</strong>
                          </small>
                          <a
                            role="button"
                            href="../apps/settings-edit.html"
                            class="btn m-t-0 btn-xs btn-default pull-right"
                          >
                            <i class="fas fa-fw fa-gear" />
                          </a>
                        </li>

                        {/* <!-- START Scroll Inside Panel --> */}
                        <li class="list-group-item b-a-0 p-x-0 p-y-0 b-t-0">
                          <div class="scroll-300 custom-scrollbar">
                            <a
                              href="../pages/timeline.html"
                              class="list-group-item b-r-0 b-t-0 b-l-0"
                            >
                              <div class="media">
                                <div class="media-left">
                                  <span class="fas-stack fa-lg">
                                    <i class="fas fa-circle-thin fa-stack-2x text-danger" />
                                    <i class="fas fa-close fa-stack-1x fa-fw text-danger" />
                                  </span>
                                </div>
                                <div class="media-body">
                                  <h5 class="m-t-0">
                                    <span>
                                      You can&apos;t generate the system without
                                      parsing the haptic AGP circuit!
                                    </span>
                                  </h5>
                                  <p class="text-nowrap small m-b-0">
                                    <span>29-Dec-2015, 11:15</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a
                              href="../pages/timeline.html"
                              class="list-group-item b-r-0 b-l-0"
                            >
                              <div class="media">
                                <div class="media-left">
                                  <span class="fas-stack fa-lg">
                                    <i class="fas fa-circle-thin fa-stack-2x text-primary" />
                                    <i class="fas fa-info fa-stack-1x text-primary" />
                                  </span>
                                </div>
                                <div class="media-body">
                                  <h5 class="m-t-0">
                                    <span>
                                      If we index the protocol, we can get to
                                      the IB port through the neural PNG
                                      capacitor!
                                    </span>
                                  </h5>
                                  <p class="text-nowrap small m-b-0">
                                    <span>25-Feb-2012, 08:27</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a
                              href="../pages/timeline.html"
                              class="list-group-item b-r-0 b-l-0"
                            >
                              <div class="media">
                                <div class="media-left">
                                  <span class="fas-stack fa-lg">
                                    <i class="fas fa-circle-thin fa-stack-2x text-success" />
                                    <i class="fas fa-check fa-stack-1x text-success" />
                                  </span>
                                </div>
                                <div class="media-body">
                                  <h5 class="m-t-0">
                                    <span>
                                      parsing the program won&apos;t do
                                      anything, we need to copy the digital SCSI
                                      bandwidth!
                                    </span>
                                  </h5>
                                  <p class="text-nowrap small m-b-0">
                                    <span>11-Dec-2014, 06:59</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a
                              href="../pages/timeline.html"
                              class="list-group-item b-r-0 b-l-0"
                            >
                              <div class="media">
                                <div class="media-left">
                                  <span class="fas-stack fa-lg">
                                    <i class="fas fa-circle-thin fa-stack-2x text-warning" />
                                    <i class="fas fa-exclamation fa-stack-1x fa-fw text-warning" />
                                  </span>
                                </div>
                                <div class="media-body">
                                  <h5 class="m-t-0">
                                    <span>
                                      indexing the alarm won&apos;t do anything,
                                      we need to reboot the neural SMS hard
                                      drive!
                                    </span>
                                  </h5>
                                  <p class="text-nowrap small m-b-0">
                                    <span>10-Apr-2014, 05:20</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>

                        {/* <!-- END Scroll Inside Panel --> */}
                        <li class="list-group-item b-a-0 p-x-0 p-y-0 r-a-0 b-b-0">
                          <a
                            class="list-group-item text-center b-r-0 b-b-0 b-l-0 b-r-b-r-0 b-r-b-l-0"
                            href="../pages/timeline.html"
                          >
                            See All Notifications
                            <i class="fas fa-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                {/* <!-- END Notification Dropdown Menu --> */}
              </li>
              {/* <!-- END Notification --> */}

              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                >
                  <i class="fas fa-lg fa-fw fa-envelope hidden-xs" />
                  <span class="hidden-sm hidden-md hidden-lg">
                    Messages
                    <span class="badge badge-info m-l-1">3</span>
                  </span>
                  <span class="label label-info label-pill label-with-icon hidden-xs">
                    3
                  </span>
                  <span class="fas fa-fw fa-angle-down hidden-lg hidden-md hidden-sm" />
                </a>

                {/* <!-- START Messages Dropdown Menu --> */}
                <ul class="dropdown-menu dropdown-menu-right p-t-0 b-t-0 p-b-0 b-b-0 b-a-0">
                  <li>
                    <div class="yamm-content p-t-0 p-r-0 p-l-0 p-b-0">
                      <ul class="list-group m-b-0">
                        <li class="list-group-item b-r-0 b-l-0 b-r-0 b-t-r-0 b-t-l-0 b-b-2 w-350">
                          <small class="text-uppercase">
                            <strong>Messages</strong>
                          </small>
                          <a
                            role="button"
                            href="../apps/new-email.html"
                            class="btn m-t-0 btn-xs btn-default pull-right"
                          >
                            <i class="fas fa-pencil" />
                          </a>
                        </li>

                        {/* <!-- START Scroll Inside Panel --> */}
                        <li class="list-group-item b-a-0 p-x-0 p-y-0 b-t-0">
                          <div class="scroll-200 custom-scrollbar">
                            <a
                              href="../apps/email-details.html"
                              class="list-group-item b-r-0 b-t-0 b-l-0"
                            >
                              <div class="media">
                                <div class="media-left media-middle">
                                  <div class="avatar">
                                    <img
                                      class="media-object img-circle"
                                      src="https://s3.amazonaws.com/uifaces/faces/twitter/craigelimeliah/128.jpg"
                                      alt="Avatar"
                                    />
                                    <i class="avatar-status avatar-status-bottom bg-danger b-gray-darker" />
                                  </div>
                                </div>
                                <div class="media-body media-auto">
                                  <h5 class="m-b-0 m-t-0">
                                    <span>Omari Jacobson</span>
                                    <small>
                                      <span>06:29</span>
                                    </small>
                                  </h5>
                                  <p class="m-t-0 m-b-0">
                                    <span>Aliquam iusto rerum culpa.</span>
                                  </p>
                                </div>
                              </div>
                            </a>

                            <a
                              href="../apps/email-details.html"
                              class="list-group-item b-r-0 b-l-0"
                            >
                              <div class="media">
                                <div class="media-left media-middle">
                                  <div class="avatar">
                                    <img
                                      class="media-object img-circle"
                                      src="https://s3.amazonaws.com/uifaces/faces/twitter/her_ruu/128.jpg"
                                      alt="Avatar"
                                    />
                                    <i class="avatar-status avatar-status-bottom bg-warning b-gray-darker" />
                                  </div>
                                </div>
                                <div class="media-body media-auto">
                                  <h5 class="m-b-0 m-t-0">
                                    <span>Jaylin Bogisich</span>
                                    <small>
                                      <span>06:40</span>
                                    </small>
                                  </h5>
                                  <p class="m-t-0 m-b-0">
                                    <span>
                                      Non nihil nam illo nihil et facilis et.
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </a>

                            <a
                              href="../apps/email-details.html"
                              class="list-group-item b-r-0 b-l-0"
                            >
                              <div class="media">
                                <div class="media-left media-middle">
                                  <div class="avatar">
                                    <img
                                      class="media-object img-circle"
                                      src="https://s3.amazonaws.com/uifaces/faces/twitter/snowshade/128.jpg"
                                      alt="Avatar"
                                    />
                                    <i class="avatar-status avatar-status-bottom bg-success b-gray-darker" />
                                  </div>
                                </div>
                                <div class="media-body media-auto">
                                  <h5 class="m-b-0 m-t-0">
                                    <span>Estefania Hand</span>
                                    <small>
                                      <span>01:32</span>
                                    </small>
                                  </h5>
                                  <p class="m-t-0 m-b-0">
                                    <span>
                                      Et et reprehenderit sint sed voluptatem
                                      odit.
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </a>

                            <a
                              href="../apps/email-details.html"
                              class="list-group-item b-r-0 b-l-0"
                            >
                              <div class="media">
                                <div class="media-left media-middle">
                                  <div class="avatar">
                                    <img
                                      class="media-object img-circle"
                                      src="https://s3.amazonaws.com/uifaces/faces/twitter/darylws/128.jpg"
                                      alt="Avatar"
                                    />
                                    <i class="avatar-status avatar-status-bottom bg-danger b-gray-darker" />
                                  </div>
                                </div>
                                <div class="media-body media-auto">
                                  <h5 class="m-b-0 m-t-0">
                                    <span>Hope Sanford</span>
                                    <small>
                                      <span>10:55</span>
                                    </small>
                                  </h5>
                                  <p class="m-t-0 m-b-0">
                                    <span>
                                      Iste consequuntur nihil tenetur porro est
                                      omnis.
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </a>

                            <a
                              href="../apps/email-details.html"
                              class="list-group-item b-r-0 b-l-0"
                            >
                              <div class="media">
                                <div class="media-left media-middle">
                                  <div class="avatar">
                                    <img
                                      class="media-object img-circle"
                                      src="https://s3.amazonaws.com/uifaces/faces/twitter/psaikali/128.jpg"
                                      alt="Avatar"
                                    />
                                    <i class="avatar-status avatar-status-bottom bg-warning b-gray-darker" />
                                  </div>
                                </div>
                                <div class="media-body media-auto">
                                  <h5 class="m-b-0 m-t-0">
                                    <span>Kendra Casper</span>
                                    <small>
                                      <span>03:44</span>
                                    </small>
                                  </h5>
                                  <p class="m-t-0 m-b-0">
                                    <span>
                                      Quisquam ut quia voluptatem rerum.
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </a>

                            <a
                              href="../apps/email-details.html"
                              class="list-group-item b-r-0 b-l-0"
                            >
                              <div class="media">
                                <div class="media-left media-middle">
                                  <div class="avatar">
                                    <img
                                      class="media-object img-circle"
                                      src="https://s3.amazonaws.com/uifaces/faces/twitter/scottiedude/128.jpg"
                                      alt="Avatar"
                                    />
                                    <i class="avatar-status avatar-status-bottom bg-success b-gray-darker" />
                                  </div>
                                </div>
                                <div class="media-body media-auto">
                                  <h5 class="m-b-0 m-t-0">
                                    <span>Lauren Howell</span>
                                    <small>
                                      <span>03:43</span>
                                    </small>
                                  </h5>
                                  <p class="m-t-0 m-b-0">
                                    <span>
                                      Quae eligendi recusandae neque hic
                                      similique.
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        {/* <!-- END Scroll Inside Panel --> */}

                        <li class="list-group-item b-a-0 p-x-0 b-b-0 p-y-0 r-a-0">
                          <a
                            class="list-group-item text-center b-b-0 b-r-0 b-l-0 b-r-b-r-0 b-r-b-l-0"
                            href="../apps/inbox.html"
                          >
                            See All Messages
                            <i class="fas fa-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                {/* <!-- END Messages Dropdown Menu --> */}
              </li>

              <li class="dropdown">
                <a
                  class="dropdown-toggle user-dropdown"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                >
                  <span class="m-r-1">Toni Kshlerin</span>
                  <div class="avatar avatar-image avatar-sm avatar-inline">
                    <img
                      alt="User"
                      src="https://s3.amazonaws.com/uifaces/faces/twitter/raphaelnikson/128.jpg"
                    />
                  </div>
                </a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header text-gray-lighter">
                    <strong class="text-uppercase">Account</strong>
                  </li>
                  <li role="separator" class="divider" />
                  <li>
                    <a href="../apps/profile-details.html">Your Profile</a>
                  </li>
                  <li>
                    <a href="../apps/profile-edit.html">Settings</a>
                  </li>
                  <li>
                    <a href="../apps/faq.html">Faq</a>
                  </li>
                  <li role="separator" class="divider" />
                  <li>
                    <a href="../pages/login.html">Sign Out</a>
                  </li>
                </ul>
              </li>
              <li class="hidden-xs">
                <a
                  class="action-right-sidebar-toggle"
                  title="Right sidebar on/off"
                >
                  <i class="fas fa-lg fa-align-right" />
                </a>
              </li>
            </ul>
            {/* <!-- END Right Side Navbar --> */}
          </div>
        </div>
      </div>
    );
  }
}
