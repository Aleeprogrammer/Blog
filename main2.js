$(document).ready(function() {
    // Filtrado de posts
    $('.filter-item').click(function() {
        const filterValue = $(this).attr('data-filter');
        
        // Remover active-filter de todos y agregar al clickeado
        $('.filter-item').removeClass('active-filter');
        $(this).addClass('active-filter');
        
        // Ocultar todos primero
        $('.post-box').hide();
        
        // Mostrar todos si es 'all', sino filtrar
        if (filterValue === 'all') {
            $('.post-box').fadeIn(500);
        } else {
            $('.post-box.' + filterValue).fadeIn(500);
        }
    });
    
    // Activar el primer filtro (all) al cargar la página
    $('.filter-item[data-filter="all"]').click();
});