document.querySelector('.menu_btn').addEventListener('click', function(){
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'block';
    sidebar.style.position = 'absolute';
    sidebar.style.top = '0px';
    sidebar.style.left = '0px';
    document.querySelector('.menu_btn').style.display='none';
    document.getElementById('close').style.display = 'block';
})

document.getElementById('close').addEventListener('click', function(){
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
    document.getElementById('close').style.display = 'none';
    document.querySelector('.menu_btn').style.display='block';
})