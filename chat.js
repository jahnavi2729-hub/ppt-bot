// static/chat.js

$(document).ready(function () {
  $('#messageArea').submit(function (e) {
    e.preventDefault();
    let input = $('#text');
    let msg = input.val().trim();
    if (!msg) return;

    $('#messageFormeight').append(`
      <div class="d-flex justify-content-end mb-4">
        <div class="msg_cotainer_send">${msg}</div>
      </div>
    `);

    input.val('');

    $.ajax({
      url: '/ask',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ message: msg }),
      success: function (data) {
        let answer = data.answer;
        let pptLink = data.ppt ? `<a href="${data.ppt}" download class="btn btn-success btn-sm ml-2">Download PPT</a>` : '';

        $('#messageFormeight').append(`
          <div class="d-flex justify-content-start mb-4">
            <div class="msg_cotainer">${answer} ${pptLink}</div>
          </div>
        `);

        $('#messageFormeight').scrollTop($('#messageFormeight')[0].scrollHeight);
      },
      error: function () {
        $('#messageFormeight').append(`
          <div class="d-flex justify-content-start mb-4">
            <div class="msg_cotainer">❌ Error contacting server.</div>
          </div>
        `);
      }
    });
  });
});
