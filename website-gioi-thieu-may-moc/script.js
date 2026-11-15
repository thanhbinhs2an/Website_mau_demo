// Mobile nav toggle
      (function () {
        var toggle = document.getElementById('navToggle');
        var nav = document.getElementById('mainNav');
        toggle.addEventListener('click', function () {
          var open = nav.classList.toggle('open');
          toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.addEventListener('click', function (e) {
          if (e.target.tagName === 'A') {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
          }
        });
      })();

      // Product filter
      (function () {
        var buttons = document.querySelectorAll('.filters button');
        var cards = document.querySelectorAll('#prodGrid .prod');
        buttons.forEach(function (btn) {
          btn.addEventListener('click', function () {
            buttons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
            btn.setAttribute('aria-pressed', 'true');
            var f = btn.getAttribute('data-filter');
            cards.forEach(function (card) {
              card.hidden = !(f === 'all' || card.getAttribute('data-cat') === f);
            });
          });
        });
      })();

      // "Báo giá" links pre-select the product in the form
      (function () {
        var select = document.getElementById('fProduct');
        document.querySelectorAll('[data-product]').forEach(function (link) {
          link.addEventListener('click', function () {
            var name = link.getAttribute('data-product');
            for (var i = 0; i < select.options.length; i++) {
              if (select.options[i].text === name) { select.selectedIndex = i; break; }
            }
          });
        });
      })();

      // Quote form: builds a copyable request summary (demo — no server)
      (function () {
        var form = document.getElementById('quoteForm');
        var result = document.getElementById('formResult');
        var resultText = document.getElementById('resultText');
        var copyBtn = document.getElementById('copyBtn');
        var copyNote = document.getElementById('copyNote');
        var phoneError = document.getElementById('phoneError');
        var lastText = '';
        document.getElementById('fPhone').addEventListener('input', function () {
          phoneError.textContent = '';
          phoneError.classList.remove('show');
        });
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var name = document.getElementById('fName').value.trim();
          var phone = document.getElementById('fPhone').value.trim();
          if (!name || !phone) {
            result.classList.remove('show');
            copyNote.textContent = '';
            (name ? document.getElementById('fPhone') : document.getElementById('fName')).focus();
            return;
          }
          var phoneNorm = phone.replace(/[\s.\-]/g, '');
          if (phoneNorm.indexOf('+84') === 0) phoneNorm = '0' + phoneNorm.slice(3);
          if (!/^0[35789]\d{8}$/.test(phoneNorm)) {
            result.classList.remove('show');
            copyNote.textContent = '';
            phoneError.textContent = 'Số điện thoại chưa đúng — vui lòng nhập số di động Việt Nam 10 số, bắt đầu bằng 03, 05, 07, 08 hoặc 09.';
            phoneError.classList.add('show');
            document.getElementById('fPhone').focus();
            return;
          }
          phoneError.textContent = '';
          phoneError.classList.remove('show');
          phone = phoneNorm;
          var product = document.getElementById('fProduct');
          var productText = product.value || 'Chưa chọn — cần tư vấn';
          var msg = document.getElementById('fMsg').value.trim() || '(chưa mô tả thêm)';
          lastText = 'YÊU CẦU TƯ VẤN & BÁO GIÁ — CƠ KHÍ ĐẠI PHÁT\n' +
            'Họ tên: ' + name + '\n' +
            'Số điện thoại: ' + phone + '\n' +
            'Sản phẩm quan tâm: ' + productText + '\n' +
            'Nhu cầu: ' + msg;
          resultText.textContent = lastText;
          result.classList.add('show');
          copyNote.textContent = '';
          result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
        copyBtn.addEventListener('click', function () {
          function done() { copyNote.textContent = 'Đã sao chép. Dán vào Zalo 0901 234 567 để gửi cho đội tư vấn.'; }
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(lastText).then(done, function () { copyNote.textContent = 'Không sao chép tự động được — hãy bôi đen nội dung ở trên để sao chép thủ công.'; });
          } else {
            copyNote.textContent = 'Hãy bôi đen nội dung ở trên để sao chép thủ công.';
          }
        });
      })();
