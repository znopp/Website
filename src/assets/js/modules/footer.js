function loadFooter(){
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0].replace(/-/g, '/'); // YYYY-MM-DD format
    document.getElementById("footer").innerHTML = `
    <div class="bottom-0 bg-light-2 dark:bg-dark-2 w-screen h-16 flex justify-between items-center px-2 text-sm desktop:px-5 desktop:text-xl font-normal">
        <p class="text-left">Made with love from Sweden</p>
        <p class="text-right">${formattedDate}</p>
    </div>
    `;
}
document.addEventListener('DOMContentLoaded', loadFooter)