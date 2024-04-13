function changeTab(selectedTabId) {
  // すべてのタブコンテンツを非表示にする
  document.querySelectorAll('.tab-content').forEach(function(content) {
      content.classList.remove('active');
  });

  // すべてのタブボタンを非アクティブにする
  document.querySelectorAll('.tab-button').forEach(function(button) {
      button.classList.remove('active');
  });

  // 選択されたタブコンテンツを表示する
  document.getElementById(selectedTabId).classList.add('active');

  // 選択されたタブボタンをアクティブにする
  document.querySelector(`.tab-button[onclick="changeTab('${selectedTabId}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger-menu');
  var sidebar = document.querySelector('.header_sidebar');

  hamburger.addEventListener('click', function(event) {
      sidebar.classList.toggle('active');
      event.stopPropagation(); // このイベントが親要素へ伝播しないようにする
  });

  document.addEventListener('click', function(event) {
      var target = event.target; // クリックされた要素を取得
      var isClickInsideSidebar = sidebar.contains(target);
      var isClickInsideHamburger = hamburger.contains(target);

      if (!isClickInsideSidebar && !isClickInsideHamburger && sidebar.classList.contains('active')) {
          // サイドバー内やハンバーガーメニュー以外がクリックされ、かつサイドバーが表示されている場合
          sidebar.classList.remove('active');
      }
  });

  // サイドバー内のリンクがクリックされたらサイドバーを非表示にする
  var sidebarLinks = sidebar.querySelectorAll('a'); // サイドバー内のすべてのリンクを選択
  sidebarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          // サイドバーを非表示にする
          sidebar.classList.remove('active');
      });
  });
});


document.addEventListener('DOMContentLoaded', function () {
    const targets = document.getElementsByClassName('tab');
    for (let i = 0; i < targets.length; i++) {
    targets[i].addEventListener('click', changeTab, false);
    }
     // タブメニューボタンをクリックすると実行
    function changeTab() {
     // タブのclassを変更
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');
    // コンテンツのclassの値を変更
    document.getElementsByClassName('is-display')[0].classList.remove('is-display');
    const arrayTabs = Array.prototype.slice.call(targets);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('content')[index].classList.add('is-display');
    };
}, false);
