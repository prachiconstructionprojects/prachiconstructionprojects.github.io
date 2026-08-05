/* =============================================================
   PRACHI CONSTRUCTION PROJECTS — Construction Company Homepage
   script.js
   -------------------------------------------------------------
   - Hero Swiper slider (auto crossfade)
   - Sticky header on scroll
   - AOS scroll animations init
   - Animated counter-up for stats
   - Active nav-link highlighting (scroll spy)
   - Auto-updating footer year
   ============================================================= */

$(function () {

  'use strict';

  /* =============================================================
     1. HERO SWIPER SLIDER (crossfade, 5s autoplay)
        Only initialized on pages that have the hero slider.
     ============================================================= */
  if ($('.hero-swiper').length) {
    new Swiper('.hero-swiper', {
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 1200,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.hero-pagination',
        clickable: true,
      },
    });
  }

  /* =============================================================
     2. STICKY HEADER (transparent -> white with shadow)
     ============================================================= */
  var $header = $('#siteHeader');

  function updateHeader() {
    if ($(window).scrollTop() > 50) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }
  }

  updateHeader();
  $(window).on('scroll', updateHeader);

  /* =============================================================
     3. AOS SCROLL ANIMATIONS
     ============================================================= */
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 90,
  });

  /* =============================================================
     4. COUNTER-UP ANIMATION (counts when scrolled into view)
     ============================================================= */
  function animateCounter($el) {
    var target = parseInt($el.data('target'), 10) || 0;
    var duration = 1600;
    var start = null;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      $el.text(Math.floor(easeOutCubic(progress) * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        $el.text(target);
      }
    }

    requestAnimationFrame(step);
  }

  /* IntersectionObserver (fallback: trigger immediately) */
  if ('IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var $el = $(entry.target);
          animateCounter($el);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    $('.counter').each(function () {
      counterObserver.observe(this);
    });
  } else {
    $('.counter').each(function () {
      animateCounter($(this));
    });
  }

  /* =============================================================
     5. SCROLL SPY — highlight active nav link while scrolling
        (homepage only — subpages use the hardcoded active link)
     ============================================================= */
  if ($('#home').hasClass('hero')) {
    var sections = $('section[id], header[id]');
    var navLinks = $('.navbar-nav .nav-link');

    function updateActiveLink() {
      var scrollPos = $(window).scrollTop() + 120;

      sections.each(function () {
        var $section = $(this);
        var top = $section.offset().top;
        var bottom = top + $section.outerHeight();

        if (scrollPos >= top && scrollPos < bottom) {
          var id = $section.attr('id');
          navLinks.removeClass('active')
            .filter('[href="#' + id + '"]')
            .addClass('active');
        }
      });
    }

    updateActiveLink();
    $(window).on('scroll', updateActiveLink);
  }

  /* =============================================================
     8. ENQUIRY MODAL (index.html + projects.html)
     ============================================================= */
  if ($('#enquiryModal').length) {
    $('#enquiryModal').on('show.bs.modal', function (event) {
      var btn = $(event.relatedTarget);
      var project = btn.data('project') || '';
      $('#eqProject').val(project);
      $('#eqName').val('');
      $('#eqPhone').val('');
      $('#eqLocation').val('');
      $('#eqMessage').val('');
    });

    $('#enquiryForm').on('submit', function (e) {
      e.preventDefault();

      var project = $.trim($('#eqProject').val());
      var name = $.trim($('#eqName').val());
      var phone = $.trim($('#eqPhone').val());
      var location = $.trim($('#eqLocation').val());
      var msg = $.trim($('#eqMessage').val());

      if (!name || !phone) {
        alert('Please enter your name and phone number so we can reach you.');
        return;
      }

      var text =
        'Hello Prachi Construction Projects!\n\n' +
        'I am interested in the following project.\n\n' +
        (project ? 'Project: ' + project + '\n' : '') +
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Location: ' + (location || 'Not provided') + '\n' +
        'Message: ' + (msg || '-') + '\n\n' +
        'Please get back to me. Thank you!';

      window.open('https://wa.me/917818018066?text=' + encodeURIComponent(text), '_blank');
    });
  }

  /* =============================================================
     9. TESTIMONIAL SWIPER (projects.html)
     ============================================================= */
  if ($('.testimonial-swiper').length) {
    new Swiper('.testimonial-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.testimonial-pagination',
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    });
  }

  /* =============================================================
     10. CONTACT FORM -> WHATSAPP (contact.html only)
     ============================================================= */
  if ($('#contactForm').length) {
    $('#contactForm').on('submit', function (e) {
      e.preventDefault();

      var name = $.trim($('#cfName').val());
      var phone = $.trim($('#cfPhone').val());
      var location = $.trim($('#cfLocation').val());
      var msg = $.trim($('#cfMessage').val());

      if (!name || !phone) {
        alert('Please enter your name and phone number so we can reach you.');
        return;
      }

      var text =
        'Hello Prachi Construction Projects!\n\n' +
        'I would like to discuss a project.\n\n' +
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Location: ' + (location || 'Not provided') + '\n' +
        'Message: ' + (msg || '-') + '\n\n' +
        'Please get back to me. Thank you!';

      window.open('https://wa.me/917818018066?text=' + encodeURIComponent(text), '_blank');
    });
  }
  /* =============================================================
     6. SMOOTH SCROLL for anchor links
     ============================================================= */
  $('a[href^="#"]').on('click', function (e) {
    var href = $(this).attr('href');
    if (href === '#' || href === '') return;

    var $target = $(href);
    if ($target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $target.offset().top - 70,
      }, 600, 'swing');
    }
  });

  /* =============================================================
     7. AUTO YEAR IN FOOTER
     ============================================================= */
  $('#year').text(new Date().getFullYear());

});
