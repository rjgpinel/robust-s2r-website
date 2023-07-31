const STYLE = {
    NB_MAX_CONTRIBUTORS_PER_LINE: 4, // Integer in [1, 2, 3, 4, 6]
    CONTRIBUTOR_IMAGE_SIZE: "180px",
    FOOTER_LOGO_SIZE: "240px",
}

const HEAD = {
    FAVICON_SRC: "img/ur5_pixelart.png",
    PROJECT_TITLE: "Robust visual sim-to-real transfer for robotic manipulation",
    PROJECT_SUBTITLE: {
        "name": "International Conference on Intelligent Robots and Systems (IROS) 2023",
        "url": "https://ieee-iros.org",
    },
    AUTHOR_NAME: "Ricardo Garcia",
    VIDEO_SRC: "video/video.mp4",
}

const ABSTRACT = {
    TEXT: [
            "Learning visuomotor policies in simulation is much safer and cheaper than in the real world. However, due to discrepancies between the simulated and real data, simulator-trained policies often fail when transferred to real robots. One common approach to bridge the visual sim-to-real domain gap is domain randomization (DR). While previous work mainly evaluates DR for disembodied tasks, such as pose estimation and object detection, here we systematically explore visual domain randomization methods and benchmark them on a rich set of challenging robotic manipulation tasks."
        ],
        OVERVIEW: {
            "src": "img/teaser.png",
            "legend": "We learn visuomotor manipulation policies in simulation (row 1) with domain randomization by sampling high-quality textures, lighting, object colors and camera parameters (row 2). We analyze different sampling options and demonstrate that simulator-trained policies can be directly deployed on a real robot for diverse and challenging manipulation tasks (row 3), such as rope-shaping (left) and assembling (right).",
        }
};

const CONTENT = [ // If you want to add other sections, add them with their title (used for navigation) and the html code of the section
        {
            "name": "Environments",
            "html": `To train our policies and  benchmark sim-to-real policy transfer, we have developped MUSE, a simulation framework based on MuJoCo with a diverse set of manipulation tasks and an implementation of domain randomization. You can find this simulation framework <a href="https://github.com/rjgpinel/muse" target="_blank" >here</a>.
                      <div class="container">
                      <div class="row" id="sim">
                        <div class="col-3" align="center">
                            <img src="img/stack_sim.gif", alt="stack task simulation"> 
                            <p">Stacking</p>
                        </div>
                        <div class="col-3" align="center">
                            <img src="img/push_sim.gif", alt="stack task simulation"> 
                            <p">Pushing</p>
                        </div>
                        <div class="col-3" align="center">
                            <img src="img/pushandpick_sim.gif", alt="stack task simulation"> 
                            <p>Pushing-to-pick</p>
                        </div>
                        <div class="col-3" align="center">
                            <img src="img/cupboard_sim.gif", alt="box retrieving task simulation"> 
                            <p>Box-retrieving</p>
                        </div>
                      </div>
                      <div class="row" id="sim">

                        <div class="col-1"></div>
                        <div class="col" align="center">
                            <img src="img/sweep_sim.gif", alt="stack task simulation"> 
                            <p>Sweeping</p>
                        </div>
                        <div class="col" align="center">
                            <img src="img/assembly_sim.gif", alt="assembly task simulation">
                            <p>Assembling</p>
                        </div>
                        <div class="col" align="center">
                            <img src="img/rope_sim.gif", alt="stack task simulation"> 
                            <p>Rope-shaping</p>
                        </div>
                        <div class="col-1"></div>
                      </div></div>`,

        },
        {
            "name": "Proxy task",
            "html": ` 
            <p>We propose an off-line proxy task of cube localization to select DR parameters for texture randomization, lighting randomization, variations of object colors and camera parameters.
             Notably, we demonstrate that DR parameters have similar impact on our off-line proxy task and on-line policies. 
             We, hence, use off-line optimized DR parameters to train visuomotor policies in simulation and directly apply such policies to a real robot.</p>
             <div class="col" align="center">
                <img src="img/s2r_evaluation.png", alt="cube localization as a proxy task to evaluate DR parameters"> 
            </div>
                      `,
        },
        {
            "name": "Real robot",
            "html": ` 
                      <p>Our approach achieves 93\% success rate on average when tested on a diverse set of challenging manipulation tasks.</p>

                      <div class="col" align="center">
                      <video width="320" autoplay loop muted>
                        <source src="video/real_pushing.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                      </video> 
                      <video width="320" autoplay loop muted>
                        <source src="video/real_assembling.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                      </video> 
                      <video width="320" autoplay loop muted>
                        <source src="video/real_sweep.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                      </video> 
                      </div>

                      `,
        },
    ];


                    //   <br>
                    //   <div class="col">
                    //   <p>Moreover, we study the robustness of our models to variations in visual appearance caused by changes in surface texture (b), lighting (c, d), object colors (e) and cameras pose (f).</p>
                    //     <div class="row">
                    //         <img class="center-block" src="img/real_data_setups2.png" alt="">
                    //     </div>
                    //   </div> 
                    //   <br>
                    //   <p>
                    //   Real robot datasets for the proxy task under the previous variations and default setups can be found <a href="https://github.com/rjgpinel/robolearn/" target="_blank">here</a>. 
                    //   </p>
const CONTRIBUTORS = [
        {
            "name": "Ricardo Garcia",
            "img": "img/rgarciap.jpg",
            "url": "https://rjgpinel.github.io/"
        },
        {
            "name": "Robin Strudel",
            "img": "img/robin.png",
            "url": "https://rstrudel.github.io/"
        },
        {
            "name": "Shizhe Chen",
            "img": "img/shizhe.jpg",
            "url": "https://cshizhe.github.io/"
        },
        {
            "name": "Etienne Arlaud",
            "img": "img/etienne.jpeg",
            "url": "#"
        },
        {
            "name": "Ivan Laptev",
            "img": "img/ivan.jpg",
            "url": "https://www.di.ens.fr/~laptev/"
        },
        {
            "name": "Cordelia Schmid",
            "img": "img/cordelia.jpg",
            "url": "https://www.di.ens.fr/willow/people_webpages/cordelia/"
        },
];
const LINKS = [
        {
            "title": "Paper",
            "icon": "img/paper.svg",
            "available": true,
            "links": [
                {
                    "name": "arXiv",
                    "url": "https://arxiv.org/abs/2307.15320",
                    "icon": "img/paper_copy.svg"
                },
            ],
        },
        {
            "title": "Code",
            "icon": "img/code.svg",
            "available": true,
            "links": [
                {
                    "name": "robolearn",
                    "url": "https://github.com/rjgpinel/robolearn/",
                    "icon": "img/GitHub-Mark-Light-32px.png"
                },
            ],
        },
        {
            "title": "Simulation",
            "icon": "img/code.svg",
            "available": true,
            "links": [
                {
                    "name": "muse simulator",
                    "url": "https://github.com/rjgpinel/muse",
                    "icon": "img/GitHub-Mark-Light-32px.png"
                }
            ],
        },
];

const CITATION = ` \
@inproceedings{garciap23s2r,
    author    = {Ricardo Garcia and Robin Strudel and Shizhe Chen and Etienne Arlaud and Ivan Laptev and Cordelia Schmid},
    title     = {Robust visual sim-to-real transfer for robotic manipulation},
    booktitle = {International Conference on Intelligent Robots and Systems (IROS)},
    year      = {2023}
}    `;

const FOOTER = {
        LOGOS: [
            {
                "name": "Inria",
                "src": "img/inr_logo_blanc.png",
                "url": "https://www.inria.fr/en"
            },
            {
                "name": "ENS - PSL",
                "src": "img/ens_psl_blanc.png",
                "url": "https://www.ens.psl.eu/en"
            },
            {
                "name": "PaRis AI Research InstitutE (PR[AI]RIE)",
                "src": "img/logo_prairie.png",
                "url": "https://prairie-institute.fr"
            },
        ],
        COPYRIGHT: `Inria 2023`
};
// ===== END CUSTOM DATA =====

// /!\ --- Do not change following lines ---

const NB_COLS = 12;

const section_links_nav = CONTENT.map(section => ({ "id": idFromTitle(section), "name": section.name }));
const NAVIGATION_LINKS = [{ "id": "abstract", "name": "Abstract" }].concat(
    CONTENT.map(section => ({ "id": idFromTitle(section), "name": section.name })),
    [
        { "id": "contributors", "name": "Contributors" },
        { "id": "links", "name": "Links" }
    ]
);

/* Utils */
function link(url, content, style = ``) {
    return `<a href=${url} target="_blank" ${style}>${content}</a>`;
}

function padding(nbElements, nbElementsMax, large = true) {
    const PADDING_COLS = (NB_COLS - nbElements * Math.floor(NB_COLS / nbElementsMax)) / 2;
    return PADDING_COLS > 0 ? `<div class=col-${large ? 'lg' : 'md'}-${PADDING_COLS}></div>` : ``;
}

function idFromTitle(title) {
    return title.name.toLowerCase().replace(' ', '-');
}

/* Header */
function isNonEmptyUsefulLink(_link) {
    return _link.links.length >= 1 && _link.links[0].url != "#";
}
function getNumberNonEmptyUsefulLinks() {
    return LINKS.filter(isNonEmptyUsefulLink).length;
}
function displayUsefulButton(_link) {
    const availClass = _link.available ? "" : "forbidden";
    return isNonEmptyUsefulLink(_link) ? `\
        <div class="col-sm text-center">
            ${link(_link.links[0].url, `<img src=${_link.links[0].icon} width="20px"> ${_link.title}`, `role="button" class="btn btn-dark ${availClass}"`)}
        </div>` : "";
}
function displayUsefulButtons() {
    const pad = padding(getNumberNonEmptyUsefulLinks(), 6);
    document.getElementById("useful-buttons").innerHTML = pad + LINKS.map(displayUsefulButton).join("") + pad;
}

function displayTitle() {
    let oneLineTitle = HEAD.PROJECT_TITLE;
    const remove = ["<br>", "<br/>", "<br />"];
    for (const val of remove) {
        oneLineTitle = oneLineTitle.replace(val, " ");
    }
    document.head.querySelector("title").innerHTML = oneLineTitle;
    document.head.querySelector("meta[name='author']").content = HEAD.AUTHOR_NAME;
    document.head.querySelector("meta[name='description']").content = oneLineTitle;

    const favicon_src_split = HEAD.FAVICON_SRC.split(".");
    document.head.querySelector("link[rel='icon']").type = `image/${favicon_src_split[favicon_src_split.length - 1]}`;
    document.head.querySelector("link[rel='icon']").href = HEAD.FAVICON_SRC;

    document.getElementById("head-title").innerHTML = HEAD.PROJECT_TITLE;
    document.getElementById("head-subtitle").innerHTML = `<a href=${HEAD.PROJECT_SUBTITLE.url}>${HEAD.PROJECT_SUBTITLE.name}</a>`;

    displayUsefulButtons();
}

/* Other links */
function buildOtherLinks() {
    return OTHER_LINKS.map(
        link => `
            <a class="a-other-link" href="${link.url}">
                <li class="other-link-item">${link.name}</li>
            </a>
        `).join("");
}

function displayNav() {
    document.getElementById("navigation").innerHTML = NAVIGATION_LINKS.map(
        link => `
        <li class="nav-item">
            <a class="nav-link active" href="#${link.id}">${link.name}</a>
        </li>
    `).join("");
}

/* Video section */
function displayVideo() {
    document.getElementById("video").innerHTML = `<iframe class="embed-responsive-item" src=${HEAD.VIDEO_SRC}></iframe>`;
}

/* Abstract section */
function displayAbstract() {
    document.getElementById("abstract-text").innerHTML = `
    <div class="col-sm">
        <h2 class="text-center">Abstract</h2>
        <hr>
        ${ABSTRACT.TEXT.map(text => `<p>${text}</p>`).join("")}
        <br>
        <br>
    </div>
  `;
}

function displayOverview() {
    document.getElementById("overview").innerHTML = `
        <div class="col-sm">
            <img src=${ABSTRACT.OVERVIEW.src} alt="Method Overview" class="img-fluid">
            <div id="overview-legend">${ABSTRACT.OVERVIEW.legend}</div>
        </div>
    `;
}

/* Content sections */
function displayContentSections() {
    document.getElementById("content").innerHTML = CONTENT.map(
        section => `
        <div class="container section" id=${idFromTitle(section)}>
            <div class="row">
                <div class="col-sm">
                    <h2 class="text-center">${section.name}</h2>
                    <hr>
                    ${section.html}
                </div>
            </div>
        </div>
        `
    ).join("");
}

/* Contributors section */
function addPadding(nbContributorsInLine) {
    return padding(nbContributorsInLine, STYLE.NB_MAX_CONTRIBUTORS_PER_LINE);
}

function displayContributorsRow(contributorsInRow) {
    let htmlContent = `<div class="row text-center">` + addPadding(contributorsInRow.length);

    for (const contributor of contributorsInRow) {
        const htmlImg = `<img class="rounded-circle" src=${contributor.img} alt=${contributor.name} width=${STYLE.CONTRIBUTOR_IMAGE_SIZE} height=${STYLE.CONTRIBUTOR_IMAGE_SIZE} />`;
        htmlContent +=
            `<div class="col-lg-${Math.floor(NB_COLS / STYLE.NB_MAX_CONTRIBUTORS_PER_LINE)}">
                ${link(contributor.url, htmlImg)}
                <h4>${link(contributor.url, contributor.name)}</h4>
            </div>`;
    }
    htmlContent += addPadding(contributorsInRow.length) + `</div>`;
    return htmlContent;
}

function displayContributors() {
    htmlContent = "";

    nbLines = Math.ceil(CONTRIBUTORS.length / STYLE.NB_MAX_CONTRIBUTORS_PER_LINE)
    for (const rowId of Array(nbLines).keys()) {
        const contributorsInRow = CONTRIBUTORS.slice(rowId * STYLE.NB_MAX_CONTRIBUTORS_PER_LINE, (rowId + 1) * STYLE.NB_MAX_CONTRIBUTORS_PER_LINE);
        htmlContent += displayContributorsRow(contributorsInRow);
    }

    document.getElementById("contributors").innerHTML += htmlContent;
}


/* Links section */
function formatLink(_link) {
    const availClass = _link.url == "#" || _link.url == "/#" ? "forbidden" : "";
    return `<div class="col-sm text-center">
            ${link(_link.url, `<img src=${_link.icon} width="20px"> ${_link.name}`, `role="button" class="btn btn-dark ${availClass}"`)}
        </div>`;
}

function formatLinkGroup(group) {
    return `<div class="col-sm text-center">
                <img src=${group.icon} />
                <h4>${group.title}</h4>
                ${group.links.map(link => formatLink(link)).join("")}
            </div>`;
}

function displayLinks() {
    document.getElementById("links-area").innerHTML = LINKS.map(
        group => formatLinkGroup(group)
    ).join("");
}

/* Citation */
function displayCitation() {
    htmlContent = `<code>${CITATION}</code>`;
    document.getElementsByClassName("citation")[0].innerHTML = htmlContent;
}

/* Footer */
function displayFooter() {
    const nbLogos = FOOTER.LOGOS.length;
    const nbColsPerDiv = Math.floor(NB_COLS / nbLogos);
    const pad = padding(nbLogos, nbLogos, large = false);

    const htmlLogos = FOOTER.LOGOS.map(logo => `\
        <div class="col-md-${nbColsPerDiv} text-center">
            ${link(logo.url, `<img src=${logo.src} alt=${logo.name} width=${STYLE.FOOTER_LOGO_SIZE}>`)}
        </div>
    `);

    document.getElementById("footer").innerHTML = `\
        <div class="container footer-container">
            <div class="row align-items-center h-100">
                ${pad}
                ${htmlLogos.join("")}
                ${pad}
                <div class="col-md-12 text-center align-middle">
                    <h5>&copy; ${FOOTER.COPYRIGHT}</h5>
                    Website Design: ${link("https://github.com/rjgpinel/dark-academic-website", "dark-academic-website")}
                </div>
            </div>
        </div>
    `;
}

/* Main */
function displayPage() {
    displayTitle();
    displayNav();
    displayVideo();
    displayAbstract();
    displayOverview();
    displayContentSections();
    displayContributors();
    displayLinks();
    displayCitation();
    displayFooter();
}

displayPage();

