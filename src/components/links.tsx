const DiscordLogo = require("../resources/discord-mark-white.png");
const GithubLogo = require("../resources/github-mark-white.png");
const emailLogo = require("../resources/email-512.png");

function Hyperlinks() {
    return (
        <div className="flex flex-row space-evenly justify-center">
            <a href="https://discordapp.com/users/790623906288500776"><img alt="Discord Logo" className="m-2 w-10  opacity-60 transition easy-in-out hover:opacity-100 hover:scale-110 duration-500" src={DiscordLogo}></img></a>
            <a href="https://github.com/SamyolGH"><img alt="Github Logo" className="m-2 w-8 opacity-60 transition easy-in-out hover:opacity-100 hover:scale-110 duration-500" src={GithubLogo}></img></a>
            <a href="mailto: samalew@outlook.com"><img alt="Email Logo" className="m-2 w-8 opacity-60 transition easy-in-out hover:opacity-100 hover:scale-110 duration-500" src={emailLogo}></img></a>
        </div>
    );
}

export default Hyperlinks;