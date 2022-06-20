(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        menuBtn: document.querySelector("[data-menu-button]"),
        mobileMenu: document.querySelector("[data-menu]"),
        modal: document.querySelector("[data-modal]"),
    };

    if (refs.openModalBtn) refs.openModalBtn.addEventListener("click", toggleModal);
    if (refs.closeModalBtn) refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.menuBtn.addEventListener('click', toggleMenu);


    function toggleMenu() {
        const expanded = refs.menuBtn.getAttribute("aria-expanded") == "true" | false;
        refs.menuBtn.classList.toggle("is-open");
        refs.menuBtn.setAttribute("aria-expanded", !expanded);
        refs.mobileMenu.classList.toggle("is-open");
        document.body.classList.toggle("no-scroll");
    }

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();