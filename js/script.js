var frm = $('#register-form');
frm.submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        beforeSend: function(){
            $("input").prop('disabled', true);
            $("#submit-form").attr("disabled", true);
        },
        url: 'https://script.google.com/macros/s/AKfycbyKYMK_Y0Z7SmFY0UdmPMoHftSz57KnPPH-L7IIViIHST7Jhjj0/exec',
        data: frm.serialize(),
        success: function (data) {
            $('#SuccessModal').modal('show');
        },
        error: function (data) {
            $('#FailModal').modal('show');
        },
        complete: function(){
            $("input").prop('disabled', false);
            $("#submit-form").attr("disabled", false);
            $('#register-form')[0].reset();
        }
    });
});
