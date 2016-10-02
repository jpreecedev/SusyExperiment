import "./site.scss";

export class Site {
    initialise() {

        Array.prototype.forEach.call(document.querySelectorAll('button'), (button) => {
            button.addEventListener("click", () => {
                var column = this.findAncestor(button, 'col');
                this.addClass(column, 'animate');
                setTimeout(() => {
                    this.removeClass(column, 'animate');
                }, 250);
            });
        });

    }

    findAncestor(element, cls) {
        while ((element = element.parentElement) && !element.classList.contains(cls));
        return element;
    }

    addClass(element, cls) {
        if (element.classList) {
            element.classList.add(cls);
        } else {
            element.className += ' ' + cls;
        }
    }

    removeClass(element, cls) {
        let newClassName = "";
        let classes = element.className.split(" ");
        for (let i = 0; i < classes.length; i++) {
            if (classes[i] !== cls) {
                newClassName += classes[i] + " ";
            }
        }
        element.className = newClassName;
    }
}

let site = new Site();
site.initialise();