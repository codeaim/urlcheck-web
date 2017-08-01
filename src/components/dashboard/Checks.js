import React from 'react';

export default () => (
    <section className="checks">
        <div className="filters">
            <div className="search">
                <span className="icon icon-search"/>
                <input type="search" size="1" placeholder="Search 2 checks"/>
            </div>
            <div className="sort">
                <span className="icon icon-sort"/>
                <select id="order" name="order" defaultValue="alias">
                    <option value="alias">alias</option>
                    <option value="interval">interval</option>
                    <option value="status">status</option>
                    <option value="type">prtocol</option>
                    <option value="url">url</option>
                </select>
            </div>
        </div>
        <ul>
            <li className="check up">
                <div className="check-overview">
                    <div className="check-details">
                        <div className="url-details">
                            <img className="favicon" alt="website favicon" src="https://www.google.com/s2/favicons?domain=http://www.google.com"/>
                            <div className="protocol">http</div>
                            <div className="split">://</div>
                            <div className="url">www.google.com</div>
                        </div>
                        <span className="icon icon-navigation-circle-up"/>
                    </div>
                    <div className="check-uptime">
                        <span className="name">uptime</span>
                        <div className="uptime-chart">
                            <div className="up"/>
                        </div>
                        <span className="uptime-percent high">
                            100%
                        </span>
                    </div>
                </div>
                <div className="check-settings">
                    <div className="check-traits">
                        <span className="icon icon-expand-horizontal"/>
                        1 min
                    </div>
                    <div className="check-actions">
                        <div className="delete">
                            <a className="button round" href="">
                                <span className="icon icon-bin"/>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li className="check up">
                <div className="check-overview">
                    <div className="check-details">
                        <div className="url-details"><img className="favicon"
                                                          alt="website favicon" src="https://www.google.com/s2/favicons?domain=http://www.icomoon.io"/>
                            <div className="protocol">http</div>
                            <div className="split">://</div>
                            <div className="url">www.icomoon.io</div>
                        </div>
                        <span className="icon icon-navigation-circle-up"/></div>
                    <div className="check-uptime"><span className="name">uptime</span>
                        <div className="uptime-chart">
                            <div className="up"/>
                        </div>
                        <span className="uptime-percent high">100%</span></div>
                </div>
                <div className="check-settings">
                    <div className="check-traits"><span className="icon icon-expand-horizontal"/>1 min</div>
                    <div className="check-actions">
                        <div className="delete"><a className="button round" href=""><span className="icon icon-bin"/></a>
                        </div>
                    </div>
                </div>
            </li>
            <li className="check down">
                <div className="check-overview">
                    <div className="check-details">
                        <div className="url-details"><img className="favicon"
                                                          alt="website favicon" src="https://www.google.com/s2/favicons?domain=http://www.facebook.com"/>
                            <div className="protocol">http</div>
                            <div className="split">://</div>
                            <div className="url">www.facebook.com</div>
                        </div>
                        <span className="icon icon-navigation-circle-down"/></div>
                    <div className="check-uptime"><span className="name">uptime</span>
                        <div className="uptime-chart">
                            <div className="down"/>
                        </div>
                        <span className="uptime-percent low">0%</span></div>
                </div>
                <div className="check-settings">
                    <div className="check-traits"><span className="icon icon-expand-horizontal"/>1 min</div>
                    <div className="check-actions">
                        <div className="delete"><a className="button round" href=""><span className="icon icon-bin"/></a>
                        </div>
                    </div>
                </div>
            </li>
            <li className="check up">
                <div className="check-overview">
                    <div className="check-details">
                        <div className="url-details"><img className="favicon"
                                                          alt="website favicon" src="https://www.google.com/s2/favicons?domain=http://www.thesaurus.com"/>
                            <div className="protocol">http</div>
                            <div className="split">://</div>
                            <div className="url">www.thesaurus.com</div>
                        </div>
                        <span className="icon icon-navigation-circle-up"/></div>
                    <div className="check-uptime"><span className="name">uptime</span>
                        <div className="uptime-chart">
                            <div className="up"/>
                        </div>
                        <span className="uptime-percent high">100%</span></div>
                </div>
                <div className="check-settings">
                    <div className="check-traits"><span className="icon icon-expand-horizontal"/>1 min</div>
                    <div className="check-actions">
                        <div className="delete"><a className="button round" href=""><span className="icon icon-bin"/></a>
                        </div>
                    </div>
                </div>
            </li>
            <li className="check disabled">
                <div className="check-overview">
                    <div className="check-details">
                        <div className="url-details"><img className="favicon" height="16px" width="16px"
                                                          alt="website favicon" src="https://www.google.com/s2/favicons?domain=http://www.stackoverflow.com"/>
                            <div className="protocol">http</div>
                            <div className="split">://</div>
                            <div className="url">www.stackoverflow.com</div>
                        </div>
                        <span className="icon icon-report-problem-circle"/></div>
                    <div className="check-uptime"><span className="name">uptime</span>
                        <div className="uptime-chart">
                            <div className="unknown"/>
                        </div>
                        <span className="uptime-percent high">100%</span></div>
                </div>
                <div className="check-settings">
                    <div className="check-traits"><span className="icon icon-expand-horizontal"/>1 min</div>
                    <div className="check-actions">
                        <div className="delete"><a className="button round" href=""><span className="icon icon-bin"/></a>
                        </div>
                    </div>
                </div>
            </li>
            <li className="check up">
                <div className="check-overview">
                    <div className="check-details">
                        <div className="url-details"><img className="favicon"
                                                          alt="website favicon" src="https://www.google.com/s2/favicons?domain=http://www.youtube.com"/>
                            <div className="protocol">http</div>
                            <div className="split">://</div>
                            <div className="url">www.youtube.com</div>
                        </div>
                        <span className="icon icon-navigation-circle-up"/></div>
                    <div className="check-uptime"><span className="name">uptime</span>
                        <div className="uptime-chart">
                            <div className="unknown"/>
                            <div className="up"/>
                            <div className="down"/>
                            <div className="up"/>
                        </div>
                        <span className="uptime-percent">66%</span></div>
                </div>
                <div className="check-settings">
                    <div className="check-traits"><span className="icon icon-expand-horizontal"/>1 min</div>
                    <div className="check-actions">
                        <div className="delete"><a className="button round" href=""><span className="icon icon-bin"/></a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div className="check-create">
            <form>
                <div className="url-details"><span className="icon icon-add"/>
                    <select name="protocol" title="protocol" defaultValue="http">
                        <option value="http">http</option>
                        <option value="https">https</option>
                    </select>
                    ://
                    <input name="url" type="url" placeholder="www.website.com"/>
                </div>
                <div className="options">
                    <div className="alias">
                        <span className="icon icon-bookmark"/>
                        <input type="text" placeholder="alias(optional)"/>
                    </div>
                    <div className="check-settings">
                        <div className="interval">
                            <span className="icon icon-expand-horizontal"/>
                            <select name="interval" title="interval">
                                <option value="1">1 min</option>
                                <option value="2">2 min</option>
                                <option value="5">5 min</option>
                                <option value="10">10 min</option>
                            </select>
                        </div>
                        <div className="actions">
                            <div className="save">
                                <a className="button round" href="/dashboard.html">
                                    <span className="icon icon-download"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
)