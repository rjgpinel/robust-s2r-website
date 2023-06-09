// ===== START CUSTOM DATA =====
const DATA = {
    STYLE: {
        NB_MAX_CONTRIBUTORS_PER_LINE: 3, // Integer in [1, 2, 3, 4, 6]
        CONTRIBUTOR_IMAGE_SIZE: "180px",
        FOOTER_LOGO_SIZE: "240px",
    },
    HEAD: {
        FAVICON_SRC: "img/logo_dummy.png",
        PROJECT_TITLE: "Robust visual sim-to-real transfer for robotic manipulation",
        PROJECT_SUBTITLE: {
            "name": "Preprint,  2023",
            "url": "#",
        },
        AUTHOR_NAME: "Ricardo Garcia",
        VIDEO_SRC: "video/video_wo_conf.mp4",
    },
    ABSTRACT: {
        TEXT: [
            "Learning visuomotor policies in simulation is much safer and cheaper than in the real world. However, due to discrepancies between the simulated and real data, simulator-trained policies often fail when transferred to real robots. One common approach to bridge the visual sim-to-real domain gap is domain randomization (DR). While previous work mainly evaluates DR for disembodied tasks, such as pose estimation and object detection, here we systematically explore visual domain randomization methods and benchmark them on a rich set of challenging robotic manipulation tasks.",
            "In particular, we propose an off-line proxy task of cube localization to select DR parameters for texture randomization, lighting randomization, variations of object colors and camera parameters. Notably, we demonstrate that DR parameters have similar impact on our off-line proxy task and on-line policies. We, hence, use off-line optimized DR parameters to train visuomotor policies in simulation and directly apply such policies to a real robot.",
            "Our approach achieves 93\% success rate on average when tested on a diverse set of challenging manipulation tasks. Moreover, we evaluate the robustness of policies to visual variations in real scenes and show that our simulator-trained policies outperform policies learned using real but limited data."
        ],
        OVERVIEW: {
            "src": "img/teaser.svg",
            "legend": "We learn visuomotor manipulation policies in simulation (row 1) with domain randomization by sampling high-quality textures, lighting, object colors and camera parameters (row 2). We analyze different sampling options and demonstrate that simulator-trained policies can be directly deployed on a real robot for diverse and challenging manipulation tasks (row 3), such as rope-shaping (left) and assembling (right).",
        }
    },
    CONTENT: [ // If you want to add other sections, add them with their title (used for navigation) and the html code of the section
        {
            "name": "Environments",
            "html": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra finibus quam, nec ornare mi posuere id. Nullam vitae efficitur neque. Maecenas rutrum nunc sit amet rhoncus iaculis. Pellentesque rutrum at nisl vitae dapibus. Maecenas auctor faucibus cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum a leo porttitor, mollis diam id, porta odio. Donec convallis porttitor lectus sed fringilla. Nulla facilisi. Curabitur tincidunt turpis sit amet leo lobortis lacinia.",
        },
        {
            "name": "Real robot experiments",
            "html": `<video>
                        <source src="movie.mp4" type="video/mp4">
                    </video>`,
        },
    ],
    CONTRIBUTORS: [
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
            "img": "img/shizhe2.jpeg",
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
    ],
    LINKS: [
        {
            "title": "Paper",
            "icon": "img/paper.svg",
            "links": [
                {
                    "name": "arXiv",
                    "url": "#",
                    "icon": "img/paper_copy.svg"
                },
            ],
        },
        {
            "title": "Code",
            "icon": "img/code.svg",
            "links": [
                {
                    "name": "Muse simulator",
                    "url": "https://github.com/rjgpinel/muse",
                    "icon": "img/GitHub-Mark-Light-32px.png"
                },
                {
                    "name": "robolearn",
                    "url": "https://github.com/rjgpinel/robolearn/",
                    "icon": "img/GitHub-Mark-Light-32px.png"
                },
            ],
        },
    ],
    CITATION: ` \
@article{articlename,
    author    = {Ricardo Garcia and Robin Strudel and Shizhe Chen and Etienne Arlaud and Ivan Laptev and Cordelia Schmid},
    title     = {Robust visual sim-to-real transfer for robotic manipulation},
    journal   = {arXiv preprint arXiv:TBD},
    year      = {2023}
}    `,
    FOOTER: {
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
        ],
        COPYRIGHT: `Inria 2023`
    },
}
// ===== END CUSTOM DATA =====




// /!\ --- Do not change following lines ---

const NB_COLS = 12;
const section_links_nav = DATA.CONTENT.map(section => ({ "id": idFromTitle(section), "name": section.name }));
const NAVIGATION_LINKS = [{ "id": "abstract", "name": "Abstract" }].concat(
    DATA.CONTENT.map(section => ({ "id": idFromTitle(section), "name": section.name })),
    [
        { "id": "contributors", "name": "Contributors" },
        { "id": "links", "name": "Links" }
    ]
);


/* Utils */
function link(url, content, style = ``) {
    return `<a href=${url} target="_blank" ${style}>${content}</a>`;
}

function padding(nbElements, nbElementsMax) {
    const PADDING_COLS = (NB_COLS - nbElements * Math.floor(NB_COLS / nbElementsMax)) / 2;
    return PADDING_COLS > 0 ? `<div class=col-lg-${PADDING_COLS}></div>` : ``;
}

function idFromTitle(title) {
    return title.name.toLowerCase().replace(' ', '-');
}

/* Header */
function displayTitle() {
    let oneLineTitle = DATA.HEAD.PROJECT_TITLE;
    const remove = ["<br>", "<br/>", "<br />"];
    for (const val of remove) {
        oneLineTitle = oneLineTitle.replace(val, " ");
    }
    document.head.querySelector("title").innerHTML = oneLineTitle;
    document.head.querySelector("meta[name='author']").content = DATA.HEAD.AUTHOR_NAME;
    document.head.querySelector("meta[name='description']").content = oneLineTitle;

    document.head.querySelector("link[rel='icon']").type = `image/${DATA.HEAD.FAVICON_SRC.split(".").at(-1)}`;
    document.head.querySelector("link[rel='icon']").href = DATA.HEAD.FAVICON_SRC;

    document.getElementById("nav-project-title").innerHTML = oneLineTitle;
    document.getElementById("head-title").innerHTML = DATA.HEAD.PROJECT_TITLE;
    document.getElementById("head-subtitle").innerHTML = `<a href=${DATA.HEAD.PROJECT_SUBTITLE.url}>${DATA.HEAD.PROJECT_SUBTITLE.name}</a>`;
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
    document.getElementById("video").innerHTML = `<iframe class="embed-responsive-item" src=${DATA.HEAD.VIDEO_SRC}></iframe>`;
}

/* Abstract section */
function displayAbstract() {
    document.getElementById("abstract-text").innerHTML = `
    <div class="col-sm">
        <h2 class="text-center">Abstract</h2>
        <hr>
        ${DATA.ABSTRACT.TEXT.map(text => `<p>${text}</p>`).join("")}
        <br>
        <br>
    </div>
  `;
}

function displayOverview() {
    document.getElementById("overview").innerHTML = `
        <div class="col-sm">
            <img src=${DATA.ABSTRACT.OVERVIEW.src} alt="Method Overview" class="img-fluid">
            <div id="overview-legend">${DATA.ABSTRACT.OVERVIEW.legend}</div>
        </div>
    `;
}

/* Content sections */
function displayContentSections() {
    document.getElementById("content").innerHTML = DATA.CONTENT.map(
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
    return padding(nbContributorsInLine, DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE);
}

function displayContributorsRow(contributorsInRow) {
    let htmlContent = `<div class="row text-center">` + addPadding(contributorsInRow.length);

    for (const contributor of contributorsInRow) {
        const htmlImg = `<img class="rounded-circle" src=${contributor.img} alt=${contributor.name} width=${DATA.STYLE.CONTRIBUTOR_IMAGE_SIZE} height=${DATA.STYLE.CONTRIBUTOR_IMAGE_SIZE} />`;
        htmlContent +=
            `<div class="col-lg-${Math.floor(NB_COLS / DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE)}">
                ${link(contributor.url, htmlImg)}
                <h4>${link(contributor.url, contributor.name)}</h4>
            </div>`;
    }
    htmlContent += addPadding(contributorsInRow.length) + `</div>`;
    return htmlContent;
}

function displayContributors() {
    htmlContent = "";

    nbLines = Math.ceil(DATA.CONTRIBUTORS.length / DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE)
    for (const rowId of Array(nbLines).keys()) {
        const contributorsInRow = DATA.CONTRIBUTORS.slice(rowId * DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE, (rowId + 1) * DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE);
        htmlContent += displayContributorsRow(contributorsInRow);
    }

    document.getElementById("contributors").innerHTML += htmlContent;
}


/* Links section */
function formatLink(_link) {
    return `<div class="col-sm text-center">
            ${link(_link.url, `<img src=${_link.icon} width="20px"> ${_link.name}`, `role="button" class="btn btn-dark"`)}
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
    document.getElementById("links-area").innerHTML = DATA.LINKS.map(
        group => formatLinkGroup(group)
    ).join("");
}

/* Citation */
function displayCitation() {
    htmlContent = `<code>${DATA.CITATION}</code>`;
    document.getElementsByClassName("citation")[0].innerHTML = htmlContent;
}

/* Footer */
function displayFooter() {
    const nbLogos = DATA.FOOTER.LOGOS.length;
    const nbColsPerDiv = Math.floor(NB_COLS / (nbLogos + 1));
    const pad = padding(nbLogos + 1, nbLogos + 1);

    const htmlLogos = DATA.FOOTER.LOGOS.map(logo => `\
        <div class="col-md-${nbColsPerDiv} text-center">
            ${link(logo.url, `<img src=${logo.src} alt=${logo.name} width=${DATA.STYLE.FOOTER_LOGO_SIZE}>`)}
        </div>
    `);

    document.getElementById("footer").innerHTML = `\
        <div class="container footer-container">
            <div class="row align-items-center h-100">
                ${pad}
                ${htmlLogos.join("")}
                <div class="col-md-${nbColsPerDiv} text-center align-middle">
                    <h5>&copy; ${DATA.FOOTER.COPYRIGHT}</h5>
                    Website Design: ${link("https://github.com/rjgpinel/dark-academic-website", "dark-academic-website")}
                </div>
                ${pad}
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
