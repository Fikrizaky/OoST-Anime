      var MONTH_FORMAT = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var NO_IMAGE = "http://1.bp.blogspot.com/-eAeO-DYJDws/Vkqtj4HFBFI/AAAAAAAAB0o/Q5OLsyONXM0/s1600-r/nth.png";
      var POST_PER_PAGE = 10; // number of posts per page "navigation"
      var LABEL_SEARCH_NUM = 8; // number of posts labels search
      var POSTNAV_PREV_TEXT = "Previous"; // post nav text "previous post"
      var POSTNAV_NEXT_TEXT = "Next"; // post nav text "next post"
      var COMMENTS_TEXT = "Leave a Comment"; // comments text "leave a comment"
      // Main Scripts 
      $("#LinkList110").each(function() {
        var e = "<ul id='nav'><li><ul id='sub-menu'>";
        $("#LinkList110 li").each(function() {
          var t = $(this).text(),
              n = t.substr(0, 1),
              r = t.substr(1);
          "_" == n ? (n = $(this).find("a").attr("href"), e += '<li><a href="' + n + '">' + r + "</a></li>") : (n = $(this).find("a").attr("href"), e += '</ul></li><li><a href="' + n + '">' + t + "</a><ul id='sub-menu'>")
        });
        e += "</ul></li></ul>";
        $(this).html(e);
        $("#LinkList110 ul").each(function() {
          var e = $(this);
          if (e.html().replace(/\s|&nbsp;/g, "").length == 0) e.remove()
            });
        $("#LinkList110 li").each(function() {
          var e = $(this);
          if (e.html().replace(/\s|&nbsp;/g, "").length == 0) e.remove()
            })
      });
      $(document).ready(function() {
        $(".cmm-tabs").simplyTab({
          active: 1,
          fx: "fade",
          showSpeed: 400,
          hideSpeed: 400
        });
        $("#slink").click(function () {		        
          $('#searchbar').toggle();
        });
        $('.separator').css('float', '');
        $('.separator,.separator a').css('margin-left', '').css('margin-right', '').css('margin-bottom', '');
        $('.blogger-tab').append($('#comments'));
        $(".cmm-tabs.simplyTab .wrap-tab").wrap("<div class='cmm-tabs-header'/>");
        $('.cmm-tabs-header').prepend('<h3>' + COMMENTS_TEXT + '</h3>');
        $("#menu").show();
        $("ul#sub-menu").parent("li").addClass("hasSub");
        $("abbr.timeago").timeago();
        $(".footer-sections .widget h2").wrap("<div class='widget-title'/>");
        $(".index .post-outer,.archive .post-outer").each(function() {
          $(this).find(".block-image .thumb a").attr("style", function(e, t) {
            return t.replace("/default.jpg", "/mqdefault.jpg")
          }).attr("style", function(e, t) {
            return t.replace("s72-c", "s1600")
          })
        });
        $('.PopularPosts ul li img').each(function() {
          $(this).attr('src', function(i, src) {
            return src.replace('/default.jpg', '/mqdefault.jpg')
          }).attr('src', function(i, src) {
            return src.replace('s72-c', 's1600')
          }).attr('src', function(i, src) {
            return src.replace('w72-h72-p-nu', 's1600')
          })
        });
        $(window).scroll(function() {
          if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn()
          } else {
            $('#back-to-top').fadeOut()
          }
        });
        $('#back-to-top').hide().click(function() {
          $('html, body').animate({
            scrollTop: 0
          }, 800);
          return false
        });
        var tab1 = $("#sidebar_tabs #tab1 .widget h2").text();
        $(".tab-opt .opt-1 a").text(tab1);
        var tab2 = $("#sidebar_tabs #tab2 .widget h2").text();
        $(".tab-opt .opt-2 a").text(tab2);
        var tab3 = $("#sidebar_tabs #tab3 .widget h2").text();
        $(".tab-opt .opt-3 a").text(tab3);
        $("#tab1 .widget h2,#tab2 .widget h2,#tab3 .widget h2,#tab1 .widget-title,#tab2 .widget-title,#tab3 .widget-title").remove();
        $(".sidebar_tabs").tabslet({
          mouseevent: "click",
          attribute: "href",
          animation: true
        });
        if ($(".sidebar_tabs .widget").length === 0) {
          $(".sidebar_tabs").remove()
        }
      });
      $(document).ready(function(a) {
        var b = a("a.newer-link");
        var c = a("a.older-link");
        a.get(b.attr("href"), function(c) {
          b.html("<strong>" + POSTNAV_NEXT_TEXT + "</strong><span>" + a(c).find(".post h1.post-title").text() + "</span>")
        }, "html");
        a.get(c.attr("href"), function(b) {
          c.html("<strong>" + POSTNAV_PREV_TEXT + "</strong><span>" + a(b).find(".post h1.post-title").text() + "</span>")
        }, "html")
      });
      $(window).bind("load", function() {
        $('.box-title h2 a,.Label a,.postags a,.label-head a').each(function() {
          var labelPage = $(this).attr('href');
          $(this).attr('href', labelPage + '?&max-results=' + LABEL_SEARCH_NUM + '')
        })
      });
      $(".item .post-body,.static_page .post-body").each(function() {
        var all = $(this),
            layout = all.find("*"),
            ns = "[no-sidebar]",
            ls = "[left-sidebar]";
        layout.replaceText(ns, "<style>@media only screen and (min-width: 1060px) {#main-wrapper{width:100%;transition:all .0s ease;-webkit-transition:all .0s ease;-moz-transition:all .0s ease;-o-transition:all .0s ease}.sidebar-wrapper{display:none;}}</style>");
        layout.replaceText(ls, "<style>@media only screen and (min-width: 1060px) {#main-wrapper{float:right;}.sidebar-wrapper{float:left;}}</style>")
      });
      jQuery(document).ready(function($) {
        $('.header-random li').each(function() {
          $.ajax({
            url: "/feeds/posts/default?alt=json-in-script",
            type: 'get',
            dataType: "jsonp",
            success: function(t) {
              t = t.feed.entry.length - 3, t = Math.floor(Math.random() * (t - 0 + 1)) + 0, 0 == t && (t = Math.floor(Math.random() * (t - 0 + 1)) + 1), t == 0 && (t == 1), $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&start-index=" + t + "&max-results=1",
                type: 'get',
                dataType: "jsonp",
                success: function(data) {
                  var url = "";
                  var rlink = '';
                  for (var i = 0; i < data.feed.entry.length; i++) {
                    for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                      if (data.feed.entry[i].link[j].rel == "alternate") {
                        url = data.feed.entry[i].link[j].href;
                        break
                      }
                    }
                    rlink += '<a class="rdn-icon" href="' + url + '"></a>'
                  }
                  $('.header-random li').html(rlink)
                }
              })
            }
          })
        })
      });
      $("#feat-sec .HTML .widget-content").each(function() {
        var th = $(this),
            label = th.text(),
            h2 = $(this).prev("h2").text();
        $.ajax({
          url: "/feeds/posts/default/-/" + label + "?alt=json-in-script&max-results=3",
          type: 'get',
          dataType: "jsonp",
          success: function(data) {
            var url = "";
            var boxcode = '<div class="uk-featured-post">';
            for (var i = 0; i < data.feed.entry.length; i++) {
              for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                if (data.feed.entry[i].link[j].rel == "alternate") {
                  url = data.feed.entry[i].link[j].href;
                  break
                }
              }
              var title = data.feed.entry[i].title.$t;
              var author_name = data.feed.entry[i].author[0].name.$t;
              var get_date = data.feed.entry[i].published.$t,
                  year = get_date.substring(0, 4),
                  month = get_date.substring(5, 7),
                  day = get_date.substring(8, 10),
                  date = MONTH_FORMAT[parseInt(month, 10)] + ' ' + day + ', ' + year;
              var content = data.feed.entry[i].content.$t;
              var $content = $('<div>').html(content);
              var re = /<\S[^>]*>/g;
              var snippet = content.replace(re, "");
              if (snippet.length > 96) {
                snippet = '' + snippet.substring(0, 140) + '...'
              }
              if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                var img2 = data.feed.entry[i].media$thumbnail.url;
                var image = img2
                } else if (content.indexOf("<img") > -1) {
                  var img = $content.find('img:first').attr('src');
                  var image = img
                  } else {
                    var image = NO_IMAGE
                    }
              if (i == 0) {
                boxcode += '<div class="uk-column1"><div class="uk-featured-item item1"><div class="uk-post-thumb"><a class="uk-image" href="' + url + '" style="background:url(' + image + ') no-repeat center center;background-size: cover"></a></div><div class="uk-post-inner"><div class="uk-post-caption"><h3 class="uk-post-title"><a href="' + url + '">' + title + '</a></h3><div class="uk-post-meta"><span class="uk-author">' + author_name + '</span><span class="uk-date">' + date + '</span></div><div class="meta-border"/><div class="uk-snippet"><span>' + snippet + '</span></div></div></div></div></div>'
              } else if (i == 1) {
                boxcode += '<div class="uk-column2"><div class="uk-featured-item item2"><div class="uk-post-thumb"><a class="uk-image" href="' + url + '" style="background:url(' + image + ') no-repeat center center;background-size: cover"></a></div><div class="uk-post-inner"><div class="uk-post-caption"><h3 class="uk-post-title"><a href="' + url + '">' + title + '</a></h3><div class="uk-post-meta"><span class="uk-author">' + author_name + '</span><span class="uk-date">' + date + '</span></div></div></div></div>'
              } else if (i == 2) {
                boxcode += '<div class="uk-featured-item item3"><div class="uk-post-thumb"><a class="uk-image" href="' + url + '" style="background:url(' + image + ') no-repeat center center;background-size: cover"></a></div><div class="uk-post-inner"><div class="uk-post-caption"><h3 class="uk-post-title"><a href="' + url + '">' + title + '</a></h3><div class="uk-post-meta"><span class="uk-author">' + author_name + '</span><span class="uk-date">' + date + '</span></div></div></div></div></div>'
              }
            }
            boxcode += '</div>';
            $("#feat-sec .HTML .widget-content").each(function() {
              th.html(boxcode);
              $(this).prev("h2").html('<a href="/search/label/' + label + '">' + h2 + '</a>');
              $(this).prev("h2").wrap('<div class="box-title"></div>');
              $(this).removeClass('widget-content').addClass('box-content');
              $(this).find('.box-image').each(function() {
                $(this).attr('style', function(i, src) {
                  return src.replace('/default.jpg', '/mqdefault.jpg')
                }).attr('style', function(i, src) {
                  return src.replace('s72-c', 's1600')
                })
              })
            })
          }
        })
      });
      $('.HTML .widget-content').each(function() {
        var e = $(this),
            type = e.text(),
            set = type.split("/"),
            results = set[0],
            label = set[1];
        if (type.match('recentcomments')) {
          $.ajax({
            url: "/feeds/comments/default?alt=json-in-script&max-results=" + results,
            type: 'get',
            dataType: "jsonp",
            success: function(data) {
              var url = "";
              var cmmcode = '<ul class="cmmwidget">';
              for (var i = 0; i < data.feed.entry.length; i++) {
                if (i == data.feed.entry.length) break;
                for (var k = 0; k < data.feed.entry[i].link.length; k++) {
                  if (data.feed.entry[i].link[k].rel == 'alternate') {
                    url = data.feed.entry[i].link[k].href;
                    break
                  }
                }
                if ("content" in data.feed.entry[i]) {
                  var content = data.feed.entry[i].content.$t
                  } else if ("summary" in b_rc) {
                    var content = data.feed.entry[i].summary.$t
                    } else var content = "";
                var re = /<\S[^>]*>/g;
                content = content.replace(re, "");
                if (content.length > 40) {
                  content = '' + content.substring(0, 30) + '...'
                }
                var author = data.feed.entry[i].author[0].name.$t;
                var thumburl = data.feed.entry[i].author[0].gd$image.src;
                if (thumburl.match('http://img1.blogblog.com/img/blank.gif')) {
                  var avatar = 'http://4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png'
                  } else {
                    if (thumburl.match('http://img2.blogblog.com/img/b16-rounded.gif')) {
                      var avatar = 'http://4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png'
                      } else {
                        var avatar = thumburl
                        }
                  };
                cmmcode += '<li><div class="avatarImage avatarRound"><img class="avatarRound" src="' + avatar + '"/></div><a href="' + url + '">' + author + '</a><span>"' + content + '"</span></li>'
              }
              cmmcode += '</ul><div class="clear"/>';
              $('.HTML .widget-content').each(function() {
                e.html(cmmcode)
              })
            }
          })
        }
        if (type.match('randomposts')) {
          $.ajax({
            url: "/feeds/posts/default?alt=json-in-script",
            type: 'get',
            dataType: "jsonp",
            success: function(t) {
              t = t.feed.entry.length - 3, t = Math.floor(Math.random() * (t - 0 + 1)) + 0, 0 == t && (t = Math.floor(Math.random() * (t - 0 + 1)) + 1), t == 0 && (t == 1);
              $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&start-index=" + t + "&max-results=" + results,
                type: 'get',
                dataType: "jsonp",
                success: function(data) {
                  var url = "";
                  var randomcode = '<ul class="roma-widget">';
                  for (var i = 0; i < data.feed.entry.length; i++) {
                    for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                      if (data.feed.entry[i].link[j].rel == "alternate") {
                        url = data.feed.entry[i].link[j].href;
                        break
                      }
                    }
                    var title = data.feed.entry[i].title.$t;
                    var get_date = data.feed.entry[i].published.$t,
                        year = get_date.substring(0, 4),
                        month = get_date.substring(5, 7),
                        day = get_date.substring(8, 10),
                        date = MONTH_FORMAT[parseInt(month, 10)] + ' ' + day + ', ' + year;
                    var content = data.feed.entry[i].content.$t;
                    var $content = $('<div>').html(content);
                    if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                      var src2 = data.feed.entry[i].media$thumbnail.url;
                      var image = src2
                      } else if (content.indexOf("<img") > -1) {
                        var src = $content.find('img:first').attr('src');
                        var image = src
                        } else {
                          var image = NO_IMAGE
                          }
                    randomcode += '<li><div class="wid-thumb"><a class="mag-thumb" href="' + url + '" style="background:url(' + image + ') no-repeat center center;background-size: cover"/></div><div class="p-head"><h3 class="wrp-titulo"><a href="' + url + '">' + title + '</a></h3><span class="p-date">' + date + '</span></div></li>'
                  }
                  randomcode += '</ul><div class="clear"/>';
                  $('.HTML .widget-content').each(function() {
                    e.html(randomcode);
                    $(this).find('.mag-thumb').each(function() {
                      $(this).attr('style', function(i, src) {
                        return src.replace('/default.jpg', '/mqdefault.jpg')
                      }).attr('style', function(i, src) {
                        return src.replace('s72-c', 's1600')
                      })
                    })
                  })
                }
              })
            }
          })
        }
        if (type.match('recentposts')) {
          $.ajax({
            url: "/feeds/posts/default?alt=json-in-script&max-results=" + results,
            type: 'get',
            dataType: "jsonp",
            success: function(data) {
              var url = "";
              var recentcode = '<ul class="roma-widget">';
              for (var i = 0; i < data.feed.entry.length; i++) {
                for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                  if (data.feed.entry[i].link[j].rel == "alternate") {
                    url = data.feed.entry[i].link[j].href;
                    break
                  }
                }
                var title = data.feed.entry[i].title.$t;
                var get_date = data.feed.entry[i].published.$t,
                    year = get_date.substring(0, 4),
                    month = get_date.substring(5, 7),
                    day = get_date.substring(8, 10),
                    date = MONTH_FORMAT[parseInt(month, 10)] + ' ' + day + ', ' + year;
                var content = data.feed.entry[i].content.$t;
                var $content = $('<div>').html(content);
                if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                  var src2 = data.feed.entry[i].media$thumbnail.url;
                  var image = src2
                  } else if (content.indexOf("<img") > -1) {
                    var src = $content.find('img:first').attr('src');
                    var image = src
                    } else {
                      var image = NO_IMAGE
                      }
                recentcode += '<li><div class="wid-thumb"><a class="mag-thumb" href="' + url + '" style="background:url(' + image + ') no-repeat center center;background-size: cover"/></div><div class="p-head"><h3 class="wrp-titulo"><a href="' + url + '">' + title + '</a></h3><span class="p-date">' + date + '</span></div></li>'
              }
              recentcode += '</ul><div class="clear"/>';
              $('.HTML .widget-content').each(function() {
                e.html(recentcode);
                $(this).find('.mag-thumb').each(function() {
                  $(this).attr('style', function(i, src) {
                    return src.replace('/default.jpg', '/mqdefault.jpg')
                  }).attr('style', function(i, src) {
                    return src.replace('s72-c', 's1600')
                  })
                })
              })
            }
          })
        }
        if (type.match('custom-widget')) {
          $.ajax({
            url: "/feeds/posts/default/-/" + label + "?alt=json-in-script&max-results=" + results,
            type: 'get',
            dataType: "jsonp",
            success: function(data) {
              var url = "";
              var customcode = '<ul class="roma-widget">';
              for (var i = 0; i < data.feed.entry.length; i++) {
                for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                  if (data.feed.entry[i].link[j].rel == "alternate") {
                    url = data.feed.entry[i].link[j].href;
                    break
                  }
                }
                var title = data.feed.entry[i].title.$t;
                var get_date = data.feed.entry[i].published.$t,
                    year = get_date.substring(0, 4),
                    month = get_date.substring(5, 7),
                    day = get_date.substring(8, 10),
                    date = MONTH_FORMAT[parseInt(month, 10)] + ' ' + day + ', ' + year;
                var content = data.feed.entry[i].content.$t;
                var $content = $('<div>').html(content);
                if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                  var src2 = data.feed.entry[i].media$thumbnail.url;
                  var image = src2
                  } else if (content.indexOf("<img") > -1) {
                    var src = $content.find('img:first').attr('src');
                    var image = src
                    } else {
                      var image = NO_IMAGE
                      }
                customcode += '<li><div class="wid-thumb"><a class="mag-thumb" href="' + url + '" style="background:url(' + image + ') no-repeat center center;background-size: cover"/></div><div class="p-head"><h3 class="wrp-titulo"><a href="' + url + '">' + title + '</a></h3><span class="p-date">' + date + '</span></div></li>'
              }
              customcode += '</ul><div class="clear"/>';
              $('.HTML .widget-content').each(function() {
                e.html(customcode);
                $(this).find('.mag-thumb').each(function() {
                  $(this).attr('style', function(i, src) {
                    return src.replace('/default.jpg', '/mqdefault.jpg')
                  }).attr('style', function(i, src) {
                    return src.replace('s72-c', 's1600')
                  })
                })
              })
            }
          })
        }
      });
      $(".related-ready").each(function() {
        var b = $(this).text();
        $.ajax({
          url: "/feeds/posts/default/-/" + b + "?alt=json-in-script&max-results=3",
          type: 'get',
          dataType: "jsonp",
          success: function(e) {
            var u = "";
            var h = '<div class="related">';
            for (var i = 0; i < e.feed.entry.length; i++) {
              for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                if (e.feed.entry[i].link[j].rel == "alternate") {
                  u = e.feed.entry[i].link[j].href;
                  break
                }
              }
              var g = e.feed.entry[i].title.$t;
              var c = e.feed.entry[i].content.$t;
              var $c = $('<div>').html(c);
              if (c.indexOf("//www.youtube.com/embed/") > -1) {
                var p = e.feed.entry[i].media$thumbnail.url;
                var k = p
                } else if (c.indexOf("<img") > -1) {
                  var q = $c.find('img:first').attr('src');
                  var k = q
                  } else {
                    var k = NO_IMAGE
                    }
              h += '<li><div class="related-thumb"><a class="related-img" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"/></div><h3 class="related-title"><a href="' + u + '">' + g + '</a></h3></li>'
            }
            h += '</div><div class="clear"/>';
            $(".related-ready").html(h);
            $('.related-img').each(function() {
              $(this).attr('style', function(i, src) {
                return src.replace('/default.jpg', '/hqdefault.jpg')
              }).attr('style', function(i, src) {
                return src.replace('s72-c', 's1600')
              })
            })
          }
        })
      });
