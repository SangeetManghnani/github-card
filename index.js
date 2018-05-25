var githubCardDemo = {
    init: function() {
        console.log('heello');
        const ghCard = document.querySelector('gh-card');
        const themeBtns = document.querySelectorAll('.theme-buttons');
        const themeContainers = document.querySelectorAll('.gh-card-container');

        themeBtns.forEach((themeBtn) => {
            themeBtn.addEventListener("click", function(e) {
                const type = this.dataset.theme;
                themeContainers.forEach((themeContainer) => {
                    themeContainer.style.display = "none";
                })
                switch (type) {
                    case 'material':
                        document.querySelector('#material-light').style.display = "block";
                        break;
                    case 'material-dark':
                        document.querySelector('#material-dark').style.display = "block";
                        break;
                    case 'sleek':
                        document.querySelector('#sleek-light').style.display = "block";
                        break;

                    default:
                        break;
                }
            })
        });
    }
}

githubCardDemo.init();