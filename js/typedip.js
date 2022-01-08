$.ajax({
    url: "https://ident.me", success: function (result) {
        new Typed('.typed', {
            strings: ["^300cd /main/Y4sper/^300\n`~/main/Y4sper/ $ `^600scan^200 `" + result + "`^300\n`" + "Scanning " + result + "...`^3000\n`Sucess!`^500"],
            typeSpeed: 65,
            backSpeed: 0,
            cursorChar: '_',
            loop: false,
            onComplete: (self) => {window.location.href = "main/index.html"}
        })
    }
});



