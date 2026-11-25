(function () {
  'use strict';

  function track(eventName, params) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, page_path: location.pathname, details: params || {} });
    if (typeof window.gtag === 'function') window.gtag('event', eventName, params || {});
  }

  function init() {
    document.addEventListener('click', function (e) {
      var el = e.target.closest('a');
      if (!el) return;
      var href = el.getAttribute('href') || '';
      var text = (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);

      if (href.indexOf('tel:') === 0) {
        track('phone_click', { link_text: text, link_url: href });
        return;
      }

      if (/^https:\/\/wa\.me\//i.test(href)) {
        var isBrochure = /brochure/i.test(el.className) || /I%20want%20the%20brochure/i.test(href);
        if (isBrochure) {
          track('brochure_click', { link_text: text, link_url: href });
        } else {
          track('whatsapp_click', { link_text: text, link_url: href });
        }
      }
    }, true);

    document.addEventListener('submit', function (e) {
      var form = e.target;
      if (!form || !form.id) return;
      if (form.id === 'enquiryForm' || form.id === 'contactForm') {
        track('enquiry_form_submit', { form_id: form.id });
      }
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
