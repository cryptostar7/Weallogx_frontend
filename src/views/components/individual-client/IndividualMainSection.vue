<template lang="">
  <section class="main-section">
    <div class="inner-section">
    <LeftSidebarComponent :client="client" />
    <main class="ms-sm-autopx-md-4 right-area">
      <div class="right-area-inner p-relative rightInnerDarkbg">
        <div class="right-area-wrapper pt-0">
          <IndividualClientNavbar :client="client" />  
            <div class="client-list-div less-gap">
              <div class="list-wrapper listWrapperDarkBg">
                <h3 class="bold-fw fs-28 pb-2 mb-0" @click="testFunction">Scenarios</h3>
                <ul class="nav flex-column client-list-ul">
                  <li class="nav-item clientAllListItem">
                    <div class="list-groups">
                      <div class="list-div">
                        <div v-if="client.scenarios && client.scenarios.length > 0" class="list-div">
                            <ScenariosRow :clientId="client.id" :scenarios="client.scenarios" @setActionId="id => actionId = id"/>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <button class="btn d-block large-add-btn" @click="$router.push(`/scenario-details?client=${client.id}`)">
                  <span>+</span>
                </button>
              </div>

              <div class="list-wrapper listWrapperDarkBg">
                <h3 class="bold-fw fs-28 pb-2 mb-0">Reports</h3>
                <ul class="nav flex-column client-list-ul">
                  <li class="nav-item border-0">
                    <div class="list-groups">
                      <div v-if="client.reports && client.reports.length > 0" class="list-div">
                        <ReportRow :reports="client.reports"/>
                      </div>
                    </div>
                  </li>
                </ul>
                <button class="btn d-block large-add-btn extra" @click="$router.push(`/report-builder?client=${client.id}`)">
                  <span>+</span>
                </button>
              </div>

              <div class="list-wrapper listWrapperDarkBg">
                <div class="d-flex flex-column flex-md-row align-items-center pb-2 mb-1">
                  <div class="d-flex align-items-center justify-content-between illustration-heading">
                    <h3 class="bold-fw fs-28 mb-0 lh-1">Illustrations</h3>
                    <div class="ms-4">
                      <button id="changeGridBtn" class="btn common-round-btn list">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="path-1-inside-1_2404_2" fill="white">
                          <rect width="9" height="9" rx="1"/>
                          </mask>
                          <rect width="9" height="9" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-1-inside-1_2404_2)"/>
                          <mask id="path-2-inside-2_2404_2" fill="white">
                          <rect y="11" width="9" height="9" rx="1"/>
                          </mask>
                          <rect y="11" width="9" height="9" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-2-inside-2_2404_2)"/>
                          <mask id="path-3-inside-3_2404_2" fill="white">
                          <rect x="11" y="11" width="9" height="9" rx="1"/>
                          </mask>
                          <rect x="11" y="11" width="9" height="9" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-3-inside-3_2404_2)"/>
                          <mask id="path-4-inside-4_2404_2" fill="white">
                          <rect x="11" width="9" height="9" rx="1"/>
                          </mask>
                          <rect x="11" width="9" height="9" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-4-inside-4_2404_2)"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                    <div class="search-bar-div mx-2 px-1">
                      <input type="text" class="form-control search-file-input" placeholder="Search">
                      <span class="search-icon-span"><img src="@/assets/images/icons/search.svg" aria-checked="img-fluid" alt="Search"></span>
                    </div>
                    <div class="d-flex flex-1 align-items-center justify-content-between illustration-mid flex-1">
                      <div class="sort-dropdown-div d-flex align-items-center">
                        <label class="bold-fw me-2">Sort</label>
                        <div class="dropdown sort-dropdown">
                          <button class="btn dropdown-toggle" role="button" id="sortingBtn" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <span>Last Name (A-Z)</span>
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="sortingBtn">
                            <li><a class="dropdown-item semi-bold-fw active" data-sort="ascending"
                                href="#">Last Name (A-Z)</a></li>
                            <li><a class="dropdown-item semi-bold-fw" data-sort="descending" href="#">Last Name (Z-A)</a></li>
                            <li><a class="dropdown-item semi-bold-fw" data-sort="lastEdited" href="#">Last Edited</a></li>
                            <li><a class="dropdown-item semi-bold-fw" data-sort="firstEdited" href="#">First Edited</a></li>
                          </ul>
                        </div>
                      </div>
                      <label class="upload-illustration-label cursor-pointer" id="uploadIllustraiton">
                        <input type="file" id="uploadIllustraiton" hidden>
                        <img src="@/assets/images/icons/upload-illustration.svg" class="img-fluid" alt="Upload Illustration">
                      </label>
                  </div>
                  
                </div>
                <div class="file-container-div">
                  <div class="file-list-view">
                    <div class="table-responsive">
                      <table width="100%" class="illustration-file-table">
                        <tbody>
                          <tr>
                            <th width="45%%">Name</th>
                            <th width="25%">Last Modified</th>
                            <th width="20%"></th>
                          </tr>
                          <tr>
                            <td><a href="javascript:void(0)" class="illustration-file-name">illustration file 1.pdf</a></td>
                            <td>March 23, 2023</td>
                            <td>
                              <div class="list-item-actions justify-content-end">
                                <div class="round-btns">
                                  <button class="btn round-btn" data-bs-target="#renameFileModal" data-bs-toggle="modal">
                                    <span>Rename</span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn" data-bs-toggle="modal" data-bs-target="#deleteFileModal">
                                    <span>Delete</span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27159 12.4675H11.0086L12.0468 1.53235H2.17872L3.27159 12.4675ZM13.5127 1.50703C13.5855 0.739269 12.9818 0.0754395 12.2106 0.0754395H2.01414C1.24035 0.0754395 0.635718 0.74352 0.712665 1.51348L1.83531 12.7466C1.90214 13.4152 2.4648 13.9244 3.13679 13.9244H11.144C11.8185 13.9244 12.3823 13.4115 12.4462 12.7402L13.5127 1.50703Z" fill="#9D9D9D"></path>
                                      <path d="M9.37198 7.53595C9.82346 7.53595 10.1895 7.16996 10.1895 6.71848C10.1895 6.267 9.82346 5.901 9.37198 5.901H4.85182C4.40034 5.901 4.03434 6.267 4.03434 6.71848C4.03434 7.16996 4.40034 7.53595 4.85182 7.53595H9.37198Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                           <tr>
                            <td><a href="javascript:void(0)" class="illustration-file-name">illustration-main-file-1.pdf</a></td>
                            <td>March 23, 2023</td>
                             <td>
                              <div class="list-item-actions justify-content-end">
                                <div class="round-btns">
                                  <button class="btn round-btn" data-bs-target="#renameFileModal" data-bs-toggle="modal">
                                    <span>Rename</span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn" data-bs-toggle="modal" data-bs-target="#deleteFileModal">
                                    <span>Delete</span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27159 12.4675H11.0086L12.0468 1.53235H2.17872L3.27159 12.4675ZM13.5127 1.50703C13.5855 0.739269 12.9818 0.0754395 12.2106 0.0754395H2.01414C1.24035 0.0754395 0.635718 0.74352 0.712665 1.51348L1.83531 12.7466C1.90214 13.4152 2.4648 13.9244 3.13679 13.9244H11.144C11.8185 13.9244 12.3823 13.4115 12.4462 12.7402L13.5127 1.50703Z" fill="#9D9D9D"></path>
                                      <path d="M9.37198 7.53595C9.82346 7.53595 10.1895 7.16996 10.1895 6.71848C10.1895 6.267 9.82346 5.901 9.37198 5.901H4.85182C4.40034 5.901 4.03434 6.267 4.03434 6.71848C4.03434 7.16996 4.40034 7.53595 4.85182 7.53595H9.37198Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                           <tr>
                            <td><a href="javascript:void(0)" class="illustration-file-name">illustration scenario.pdf</a></td>
                            <td>March 23, 2023</td>
                             <td>
                              <div class="list-item-actions justify-content-end">
                                <div class="round-btns">
                                  <button class="btn round-btn" data-bs-target="#renameFileModal" data-bs-toggle="modal">
                                    <span>Rename</span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn" data-bs-toggle="modal" data-bs-target="#deleteFileModal">
                                    <span>Delete</span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27159 12.4675H11.0086L12.0468 1.53235H2.17872L3.27159 12.4675ZM13.5127 1.50703C13.5855 0.739269 12.9818 0.0754395 12.2106 0.0754395H2.01414C1.24035 0.0754395 0.635718 0.74352 0.712665 1.51348L1.83531 12.7466C1.90214 13.4152 2.4648 13.9244 3.13679 13.9244H11.144C11.8185 13.9244 12.3823 13.4115 12.4462 12.7402L13.5127 1.50703Z" fill="#9D9D9D"></path>
                                      <path d="M9.37198 7.53595C9.82346 7.53595 10.1895 7.16996 10.1895 6.71848C10.1895 6.267 9.82346 5.901 9.37198 5.901H4.85182C4.40034 5.901 4.03434 6.267 4.03434 6.71848C4.03434 7.16996 4.40034 7.53595 4.85182 7.53595H9.37198Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                           <tr>
                            <td><a href="javascript:void(0)" class="illustration-file-name">superIllustration file.pdf</a></td>
                            <td>March 23, 2023</td>
                             <td>
                              <div class="list-item-actions justify-content-end">
                                <div class="round-btns">
                                  <button class="btn round-btn" data-bs-target="#renameFileModal" data-bs-toggle="modal">
                                    <span>Rename</span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn" data-bs-toggle="modal" data-bs-target="#deleteFileModal">
                                    <span>Delete</span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27159 12.4675H11.0086L12.0468 1.53235H2.17872L3.27159 12.4675ZM13.5127 1.50703C13.5855 0.739269 12.9818 0.0754395 12.2106 0.0754395H2.01414C1.24035 0.0754395 0.635718 0.74352 0.712665 1.51348L1.83531 12.7466C1.90214 13.4152 2.4648 13.9244 3.13679 13.9244H11.144C11.8185 13.9244 12.3823 13.4115 12.4462 12.7402L13.5127 1.50703Z" fill="#9D9D9D"></path>
                                      <path d="M9.37198 7.53595C9.82346 7.53595 10.1895 7.16996 10.1895 6.71848C10.1895 6.267 9.82346 5.901 9.37198 5.901H4.85182C4.40034 5.901 4.03434 6.267 4.03434 6.71848C4.03434 7.16996 4.40034 7.53595 4.85182 7.53595H9.37198Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="javascript:void(0)" class="illustration-file-name">illustration 2.pdf</a></td>
                            <td>March 23, 2023</td>
                             <td>
                              <div class="list-item-actions justify-content-end">
                                <div class="round-btns">
                                  <button class="btn round-btn" data-bs-target="#renameFileModal" data-bs-toggle="modal">
                                    <span>Rename</span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn" data-bs-toggle="modal" data-bs-target="#deleteFileModal">
                                    <span>Delete</span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27159 12.4675H11.0086L12.0468 1.53235H2.17872L3.27159 12.4675ZM13.5127 1.50703C13.5855 0.739269 12.9818 0.0754395 12.2106 0.0754395H2.01414C1.24035 0.0754395 0.635718 0.74352 0.712665 1.51348L1.83531 12.7466C1.90214 13.4152 2.4648 13.9244 3.13679 13.9244H11.144C11.8185 13.9244 12.3823 13.4115 12.4462 12.7402L13.5127 1.50703Z" fill="#9D9D9D"></path>
                                      <path d="M9.37198 7.53595C9.82346 7.53595 10.1895 7.16996 10.1895 6.71848C10.1895 6.267 9.82346 5.901 9.37198 5.901H4.85182C4.40034 5.901 4.03434 6.267 4.03434 6.71848C4.03434 7.16996 4.40034 7.53595 4.85182 7.53595H9.37198Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="javascript:void(0)" class="illustration-file-name">illustrationFile.pdf</a></td>
                            <td>March 23, 2023</td>
                             <td>
                              <div class="list-item-actions justify-content-end">
                                <div class="round-btns">
                                  <button class="btn round-btn" data-bs-target="#renameFileModal" data-bs-toggle="modal">
                                    <span>Rename</span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn" data-bs-toggle="modal" data-bs-target="#deleteFileModal">
                                    <span>Delete</span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27159 12.4675H11.0086L12.0468 1.53235H2.17872L3.27159 12.4675ZM13.5127 1.50703C13.5855 0.739269 12.9818 0.0754395 12.2106 0.0754395H2.01414C1.24035 0.0754395 0.635718 0.74352 0.712665 1.51348L1.83531 12.7466C1.90214 13.4152 2.4648 13.9244 3.13679 13.9244H11.144C11.8185 13.9244 12.3823 13.4115 12.4462 12.7402L13.5127 1.50703Z" fill="#9D9D9D"></path>
                                      <path d="M9.37198 7.53595C9.82346 7.53595 10.1895 7.16996 10.1895 6.71848C10.1895 6.267 9.82346 5.901 9.37198 5.901H4.85182C4.40034 5.901 4.03434 6.267 4.03434 6.71848C4.03434 7.16996 4.40034 7.53595 4.85182 7.53595H9.37198Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="file-grid-view d-none">
                    <div class="grid-card-wrapper p-relative">
                      <div class="dropdown" data-bs-toggle="dropdown"></div>
                      <ul class="dropdown-menu card-grid-dropdown">
                        <li><button class="dropdown-item semi-bold-fw" data-bs-toggle="modal" data-bs-target="#renameFileModal"><img src="@/assets/images/icons/edit.svg" class="img-fluid flex-shrink-0 me-3" alt="Rename" width="16"> <span>Rename</span></button></li>
                        <li><button class="dropdown-item semi-bold-fw" data-bs-target="#deleteFileModal" data-bs-toggle="modal"><img src="@/assets/images/icons/delete.svg" class="img-fluid flex-shrink-0 me-3" alt="Delete" width="16"><span>Delete</span></button></li>
                        </ul>
                        <a href="javascript:void(0)" class="grid-file-card">
                          <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_2530_2" fill="white">
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1"/>
                            </mask>
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-1-inside-1_2530_2)"/>
                            <mask id="path-2-inside-2_2530_2" fill="white">
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1"/>
                            </mask>
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-2-inside-2_2530_2)"/>
                            <mask id="path-3-inside-3_2530_2" fill="white">
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-3-inside-3_2530_2)"/>
                            <mask id="path-4-inside-4_2530_2" fill="white">
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-4-inside-4_2530_2)"/>
                            <mask id="path-5-inside-5_2530_2" fill="white">
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-5-inside-5_2530_2)"/>
                          </svg>
                          <div class="grid-file-name text-center">illustration file 1.pdf</div>
                        </a>
                    </div>
                    <div class="grid-card-wrapper p-relative">
                      <div class="dropdown" data-bs-toggle="dropdown"></div>
                      <ul class="dropdown-menu card-grid-dropdown">
                          <li><button class="dropdown-item semi-bold-fw" data-bs-toggle="modal" data-bs-target="#renameFileModal"><img src="@/assets/images/icons/edit.svg" class="img-fluid flex-shrink-0 me-3" alt="Rename" width="16"> <span>Rename</span></button>
                          </li>
                          <li><button class="dropdown-item semi-bold-fw"
                              data-bs-target="#deleteFileModal" data-bs-toggle="modal"><img
                                src="@/assets/images/icons/delete.svg" class="img-fluid flex-shrink-0 me-3" alt="Delete" width="16">
                              <span>Delete</span></button></li>
                        </ul>
                        <a href="javascript:void(0)" class="grid-file-card">
                          <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_2530_2" fill="white">
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1"/>
                            </mask>
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-1-inside-1_2530_2)"/>
                            <mask id="path-2-inside-2_2530_2" fill="white">
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1"/>
                            </mask>
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-2-inside-2_2530_2)"/>
                            <mask id="path-3-inside-3_2530_2" fill="white">
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-3-inside-3_2530_2)"/>
                            <mask id="path-4-inside-4_2530_2" fill="white">
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-4-inside-4_2530_2)"/>
                            <mask id="path-5-inside-5_2530_2" fill="white">
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-5-inside-5_2530_2)"/>
                          </svg>
                          <div class="grid-file-name text-center">illustration-main-file-1.pdf</div>
                        </a>
                    </div>
                    <div class="grid-card-wrapper p-relative">
                      <div class="dropdown" data-bs-toggle="dropdown"></div>
                      <ul class="dropdown-menu card-grid-dropdown">
                          <li><button class="dropdown-item semi-bold-fw" data-bs-toggle="modal" data-bs-target="#renameFileModal"><img src="@/assets/images/icons/edit.svg" class="img-fluid flex-shrink-0 me-3" alt="Rename" width="16"> <span>Rename</span></button>
                          </li>
                          <li><button class="dropdown-item semi-bold-fw"
                              data-bs-target="#deleteFileModal" data-bs-toggle="modal"><img
                                src="@/assets/images/icons/delete.svg" class="img-fluid flex-shrink-0 me-3" alt="Delete" width="16">
                              <span>Delete</span></button></li>
                        </ul>
                        <a href="javascript:void(0)" class="grid-file-card">
                          <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_2530_2" fill="white">
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1"/>
                            </mask>
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-1-inside-1_2530_2)"/>
                            <mask id="path-2-inside-2_2530_2" fill="white">
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1"/>
                            </mask>
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-2-inside-2_2530_2)"/>
                            <mask id="path-3-inside-3_2530_2" fill="white">
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-3-inside-3_2530_2)"/>
                            <mask id="path-4-inside-4_2530_2" fill="white">
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-4-inside-4_2530_2)"/>
                            <mask id="path-5-inside-5_2530_2" fill="white">
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-5-inside-5_2530_2)"/>
                          </svg>
                          <div class="grid-file-name text-center">illustration scenario.pdf</div>
                        </a>
                    </div>
                    <div class="grid-card-wrapper p-relative">
                      <div class="dropdown" data-bs-toggle="dropdown"></div>
                      <ul class="dropdown-menu card-grid-dropdown">
                          <li><button class="dropdown-item semi-bold-fw" data-bs-toggle="modal" data-bs-target="#renameFileModal"><img src="@/assets/images/icons/edit.svg" class="img-fluid flex-shrink-0 me-3" alt="Rename" width="16"> <span>Rename</span></button>
                          </li>
                          <li><button class="dropdown-item semi-bold-fw"
                              data-bs-target="#deleteFileModal" data-bs-toggle="modal"><img
                                src="@/assets/images/icons/delete.svg" class="img-fluid flex-shrink-0 me-3" alt="Delete" width="16">
                              <span>Delete</span></button></li>
                        </ul>
                        <a href="javascript:void(0)" class="grid-file-card">
                          <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_2530_2" fill="white">
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1"/>
                            </mask>
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-1-inside-1_2530_2)"/>
                            <mask id="path-2-inside-2_2530_2" fill="white">
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1"/>
                            </mask>
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-2-inside-2_2530_2)"/>
                            <mask id="path-3-inside-3_2530_2" fill="white">
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-3-inside-3_2530_2)"/>
                            <mask id="path-4-inside-4_2530_2" fill="white">
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-4-inside-4_2530_2)"/>
                            <mask id="path-5-inside-5_2530_2" fill="white">
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-5-inside-5_2530_2)"/>
                          </svg>
                          <div class="grid-file-name text-center">superIllustration file.pdf</div>
                        </a>
                    </div>
                    <div class="grid-card-wrapper p-relative">
                      <div class="dropdown" data-bs-toggle="dropdown"></div>
                      <ul class="dropdown-menu card-grid-dropdown">
                          <li><button class="dropdown-item semi-bold-fw" data-bs-toggle="modal" data-bs-target="#renameFileModal"><img src="@/assets/images/icons/edit.svg" class="img-fluid flex-shrink-0 me-3" alt="Rename" width="16"> <span>Rename</span></button>
                          </li>
                          <li><button class="dropdown-item semi-bold-fw"
                              data-bs-target="#deleteFileModal" data-bs-toggle="modal"><img
                                src="@/assets/images/icons/delete.svg" class="img-fluid flex-shrink-0 me-3" alt="Delete" width="16">
                              <span>Delete</span></button></li>
                        </ul>
                        <a href="javascript:void(0)" class="grid-file-card">
                          <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_2530_2" fill="white">
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1"/>
                            </mask>
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-1-inside-1_2530_2)"/>
                            <mask id="path-2-inside-2_2530_2" fill="white">
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1"/>
                            </mask>
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-2-inside-2_2530_2)"/>
                            <mask id="path-3-inside-3_2530_2" fill="white">
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-3-inside-3_2530_2)"/>
                            <mask id="path-4-inside-4_2530_2" fill="white">
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-4-inside-4_2530_2)"/>
                            <mask id="path-5-inside-5_2530_2" fill="white">
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-5-inside-5_2530_2)"/>
                          </svg>
                          <div class="grid-file-name text-center">illustration 2.pdf</div>
                        </a>
                    </div>
                    <div class="grid-card-wrapper p-relative">
                      <div class="dropdown" data-bs-toggle="dropdown"></div>
                      <ul class="dropdown-menu card-grid-dropdown">
                          <li><button class="dropdown-item semi-bold-fw" data-bs-toggle="modal" data-bs-target="#renameFileModal"><img src="@/assets/images/icons/edit.svg" class="img-fluid flex-shrink-0 me-3" alt="Rename" width="16"> <span>Rename</span></button>
                          </li>
                          <li><button class="dropdown-item semi-bold-fw"
                              data-bs-target="#deleteFileModal" data-bs-toggle="modal"><img
                                src="@/assets/images/icons/delete.svg" class="img-fluid flex-shrink-0 me-3" alt="Delete" width="16">
                              <span>Delete</span></button></li>
                        </ul>
                        <a href="javascript:void(0)" class="grid-file-card">
                          <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_2530_2" fill="white">
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1"/>
                            </mask>
                            <rect x="0.236328" y="0.591797" width="30" height="35" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-1-inside-1_2530_2)"/>
                            <mask id="path-2-inside-2_2530_2" fill="white">
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1"/>
                            </mask>
                            <rect x="10.2363" y="8.0918" width="10" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-2-inside-2_2530_2)"/>
                            <mask id="path-3-inside-3_2530_2" fill="white">
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="14.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-3-inside-3_2530_2)"/>
                            <mask id="path-4-inside-4_2530_2" fill="white">
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="19.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-4-inside-4_2530_2)"/>
                            <mask id="path-5-inside-5_2530_2" fill="white">
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1"/>
                            </mask>
                            <rect x="6.48633" y="24.3418" width="17.5" height="3.125" rx="1" fill="white" stroke="#9D9D9D" stroke-width="3.125" mask="url(#path-5-inside-5_2530_2)"/>
                          </svg>
                          <div class="grid-file-name text-center">illustrationFile.pdf</div>
                        </a>
                    </div>
                  </div>
                  <br><br>
                </div>
              </div>

            </div>  
        </div>
      </div>
    </main>
    </div>
      <!-- Edit Client Canvas -->
      <edit-client-canvas-modal v-if="client" :client="client"/>   
      <!-- Clone Scenario Modal start -->
  </section>

    <!-- Rename File Modal start -->
  <div class="modal fade common-modal" id="renameFileModal" index="-1"
    aria-labelledby="renameFileModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header pb-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img
              src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
        </div>
        <div class="modal-body pt-0 text-center">
          <div class="modalParaBorderDiv">
            <p class="modalParaReportBuilder">Rename the Illustration File</p>
            <p class="modalSmallborder"></p>
          </div>
          <div class="px-5 modalformDiv mb-0">
            <form action="">
              <div class="form-group">
                <label for="reportBulder">File Name</label>
                <input type="text" class="form-control custom-control" value="Illustration-File-1">
              </div>
            </form>
          </div>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn">Rename the File</button>
            <button type="button" class="btn modal-cancel-btn" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Rename File Modal ends -->

  <!-- Delete File Modal -->
  <div class="modal fade common-modal" id="deleteFileModal" tabindex="-1" aria-labelledby="deleteFileModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img
              src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
        </div>
        <div class="modal-body text-center">
          <h5 class="modal-title fs-24 semi-bold-fw" id="deleteFileModalLabel">Delete this file?</h5>
          <p class="fs-14">Deleting the illustration file will cause you losing the information of comparative vehicles & other related data. Please consider once more as this action cannot be undone.</p>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn">Yes, Delete</button>
            <button type="button" class="btn modal-cancel-btn" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <clone-scenario-modal @cloneScenario="getClient()" :id="actionId" :client="client.id"/>   
</template>
<script>
import testClients from "../../../services/dummy-json";
import {
  getParams,
  authHeader,
  getFirstError,
  mapClientList,
} from "../../../services/helper";
import LeftSidebarComponent from "../common/LeftSidebarComponent.vue";
import EditClientCanvasModal from "../modal/EditClientCanvasModal.vue";
import IndividualClientNavbar from "../individual-client/IndividualClientNavbar.vue";
import CloneScenarioModal from "../modal/CloneScenarioModal.vue";

import ScenariosRow from "../homepage/ScenariosRow.vue";
import ReportRow from "../homepage/ReportRow.vue";
import { getUrl } from "../../../network/url";
import { get } from "../../../network/requests";
export default {
  components: {
    EditClientCanvasModal,
    LeftSidebarComponent,
    IndividualClientNavbar,
    CloneScenarioModal,
    ScenariosRow,
    ReportRow,
  },
  data() {
    return {
      actionId: false,
    };
  },
  methods: {
    testFunction: function() {
      console.log(this.$store.state.data.clients);
    },
    getClient: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("clients"), authHeader())
        .then(response => {
          let list = mapClientList(response.data.data);
          this.$store.dispatch("clients", list);
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error.message);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },
  },
  mounted() {
    if (!this.$store.state.data.clients) {
      this.getClient();
    }

    let changeGridBtn = document.getElementById("changeGridBtn");
    let listView = document.querySelector(
      ".file-container-div .file-list-view"
    );
    let gridView = document.querySelector(
      ".file-container-div .file-grid-view"
    );

    const gridViewSVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_2404_2" fill="white"><rect width="9" height="9" rx="1"/></mask><rect width="9" height="9" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-1-inside-1_2404_2)"/><mask id="path-2-inside-2_2404_2" fill="white"><rect y="11" width="9" height="9" rx="1"/></mask><rect y="11" width="9" height="9" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-2-inside-2_2404_2)"/><mask id="path-3-inside-3_2404_2" fill="white"><rect x="11" y="11" width="9" height="9" rx="1"/></mask><rect x="11" y="11" width="9" height="9" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-3-inside-3_2404_2)"/><mask id="path-4-inside-4_2404_2" fill="white"><rect x="11" width="9" height="9" rx="1"/></mask><rect x="11" width="9" height="9" rx="1" fill="white" stroke="#9D9D9D" stroke-width="2.5" mask="url(#path-4-inside-4_2404_2)"/></svg>`;

    const listViewSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><rect x="5.25" y="15.25" width="18.5" height="0.5" rx="0.25" fill="white" stroke="#9D9D9D" stroke-width="0.5"/><rect x="5.25" y="0.25" width="18.5" height="0.5" rx="0.25" fill="white" stroke="#9D9D9D" stroke-width="0.5"/><rect x="0.25" y="0.25" width="2.5" height="0.5" rx="0.25" fill="white" stroke="#9D9D9D" stroke-width="0.5"/><rect x="0.25" y="7.75" width="2.5" height="0.5" rx="0.25" fill="white" stroke="#9D9D9D" stroke-width="0.5"/><rect x="0.25" y="15.25" width="2.5" height="0.5" rx="0.25" fill="white" stroke="#9D9D9D" stroke-width="0.5"/><rect x="5.25" y="7.75" width="18.5" height="0.5" rx="0.25" fill="white" stroke="#9D9D9D" stroke-width="0.5"/></svg>`;

    changeGridBtn.addEventListener("click", function(e) {
      e.currentTarget.classList.toggle("grid");
      e.currentTarget.classList.toggle("list");
      if (e.currentTarget.classList.contains("grid")) {
        console.log(e.currentTarget);
        e.currentTarget.innerHTML = listViewSVG;
      } else {
        e.currentTarget.innerHTML = gridViewSVG;
      }
      listView.classList.toggle("d-none");
      gridView.classList.toggle("d-none");
    });

    const gridCardWrappers = document.querySelectorAll(".grid-card-wrapper");
    const allFileDropdowns = document.querySelectorAll(
      ".grid-card-wrapper .dropdown"
    );
    gridCardWrappers.forEach(function(card) {
      card.addEventListener("contextmenu", e => {
        e.preventDefault();
        e.stopPropagation();
        allFileDropdowns.forEach(function(dropdown) {
          if (dropdown.classList.contains("show")) {
            let dropdownList = new bootstrap.Dropdown(dropdown);
            dropdownList.toggle();
          }
        });
        let curTarget = e.currentTarget.querySelector(".dropdown");
        const dropdownList = new bootstrap.Dropdown(curTarget);
        console.log(curTarget, dropdownList);
        dropdownList.toggle();
      });
    });
  },
  computed: {
    client() {
      return this.$store.getters.getClientUsingId(this.$route.params.id);
    },
  },
};
</script>
<style lang="">
</style>