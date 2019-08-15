const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');

document.body.append(highlight);

function highlightLink() {
    // getting element coordinates
    const linkCoord = this.getBoundingClientRect();
    
    // fixing coordinates when scrolled down
    const coords = {
        width: linkCoord.width,
        height: linkCoord.height,
        top: linkCoord.top + window.scrollY,
        left: linkCoord.left + window.scrollX
    }

    // console.table(linkCoord);

    // setting highlight size and position
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(link => link.addEventListener('mouseenter', highlightLink));