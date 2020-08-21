$('#post-comment').hide();
$('#btn-comment-toggle').click(e => {
    e.preventDefault();
    $('#post-comment').slideToggle()
})

// Like Button Request
$('#btn-like').click(function(e) {
    e.preventDefault();
    let imgId = $(this).data('id');
    $.post('/images/' + imgId + '/like')
        .done(data => {
            console.log(data)
            $('.likes-count').text(data.likes);
        });
});

$('#btn-delete').click(function(e) {
    e.preventDefault()
    let $this = $(this)
    const response = confirm('Seguro que desea eliminar esta imagen?')
    if (response) {
        let imgId = $this.data('id')
        $.ajax({
                url: '/images/' + imgId + '/delete',
                type: 'DELETE'
            })
            .done(function(data) {
                $this.removeClass('btn-danger').addClass('btn-success')
                $this.find('i').removeClass('fa-times').addClass('fa-check')
                $this.append('<span>Eliminado</span>')
            })
    }
})