import Logo from "../Logo";

function Header() {
    return (
        <div className="d-flex justify-content-center border-mute border-bottom py-1 sticky-top">
            <Logo/>
        </div>
    )
}
export default Header;