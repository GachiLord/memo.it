
export default function(){

    return (
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                <span>Encryption algorithm</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                <a class="dropdown-item">
                    md-5
                </a>
                <a class="dropdown-item">
                    md-4
                </a>
                <a class="dropdown-item">
                    md-3
                </a>
                </div>
            </div>
        </div>
        )
}