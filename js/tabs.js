function setupToolsTabs() {
  var tabs = $('.tabs__top-bar li');
  var tabContents = $('.tabs__content');

  // If we have a tool in the url fragement, pre-select it
  if (location.hash && location.hash.length > 1)
    selectToolInTabs(location.hash.substr(1));

  function clearTabsCurrent() {
    tabs.removeClass('current');
    tabContents.removeClass('current');
  }

  tabs.click(function () {
    clearTabsCurrent();

    var tab_id = $(this).attr('data-tab');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });

  // The following selects a tool tab in /guides/get-started
  function selectToolInTabs(toolName) {
    clearTabsCurrent();

    var toolNameEscaped = $.escapeSelector(toolName);
    $("li[data-tab='tab-install-" + toolNameEscaped + "']").addClass('current');
    $('#tab-install-' + toolNameEscaped).addClass('current');
  }
}

function setupOsTabs() {
  var tabs = $('.ostabs__top-bar li');
  var tabContents = $('.ostabs__content');

  function clearTabsCurrent() {
    tabs.removeClass('current');
    tabContents.removeClass('current');
  }

  tabs.click(function () {
    clearTabsCurrent();

    var tab_id = $(this).attr('data-tab');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });

  // The following selects the correct default tab in /guides/get-started
  function selectOperatingSystemInTabs(osName) {
    clearTabsCurrent();

    $("li[data-tab='tab-os-install-" + osName + "']").addClass('current');
    $('#tab-os-install-' + osName).addClass('current');
  }

  if (window.navigator.userAgent.indexOf("Mac") != -1) {
    selectOperatingSystemInTabs('mac');
  } else if (window.navigator.userAgent.indexOf("Linux") != -1 &&
    window.navigator.userAgent.indexOf("Android") == -1) {
    // Doesn't auto-select the Linux tab when on Android.
    selectOperatingSystemInTabs('linux');
  }
}

$(document).ready(function () {
  setupToolsTabs();
  setupOsTabs();
});