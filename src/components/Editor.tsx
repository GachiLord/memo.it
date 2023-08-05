export default function(){
    return (
        <div class="card">
            <div class="card-content">
                <div class="content">
                  <textarea
                    rows={15} 
                    autofocus
                    placeholder="your notes..."
                  />
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">Copy</a>
                  <a href="#" class="card-footer-item">Open</a>
                </footer>
            </div>
        </div>
    )
}