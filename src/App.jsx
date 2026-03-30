import { useState, useMemo } from "react";

const data = {
  meta: { title: "大家想在东京体验的事", fire_threshold: 4 },
  categories: [
    { name: "运动", icon: "🧗", entries: [
      {nicks:["是个丸子呀～","学习小动物","潇潇","NuzzleNut","Dix","泰勒甜甜甜","涨肌肉的Miki","Eliana","佘詩曼"],wish:"攀岩"},
      {nicks:["泰勒甜甜甜","15th_moon","Hazelnut Latte","shinyer","小小酱","小谢睡大觉zz"],wish:"羽毛球"},
      {nicks:["Fiona","まもなく","金金金","爱吃的星大福🍓","小谢睡大觉zz"],wish:"网球"},
      {nicks:["北野花雾","喝一杯拿铁","骑老奶奶过马路","老鼠仁"],wish:"弓道/射箭"},
      {nicks:["昭夏Mole","清遊録","七天内可修改一次名字"],wish:"公园打八段锦"},
      {nicks:["Sunny"],wish:"乒乓球"},
      {nicks:["焦虑梦"],wish:"hip-hop"},{nicks:["昼颜"],wish:"跑酷"},
      {nicks:["15th_moon"],wish:"kpop舞蹈"},{nicks:["泰勒甜甜甜"],wish:"公园瑜伽"},
      {nicks:["司徒轩尘"],wish:"爬绳子"},{nicks:["哇哈哈"],wish:"卡丁车"},
      {nicks:["momo"],wish:"舞蹈教室"},{nicks:["黑芝麻馅儿白糯米团"],wish:"学习自由泳"},
      {nicks:["重李依紗"],wish:"外星人跳舞"},
      {nicks:["小燃"],wish:"拳击"}
    ]},
    { name: "City walk", icon: "🚶", entries: [
      {nicks:["昭夏Mole","七天内可修改一次名字","Iris","重李依紗","一口一个momo","miemie","Christian Rock","鈴ニャン","白金cake🍰"],wish:"color walk"},
      {nicks:["小小酱"],wish:"坐免费循环大巴随机下车citywalk"},
      {nicks:["熊古雷.半岛"],wish:"city walk，想看看东京还能怎么玩"},
      {nicks:["鈴ニャン"],wish:"徒步"},
      {nicks:["BIBIBIBIBIccc"],wish:"坐电车随机看风景"},
      {nicks:["momo"],wish:"徒步山手线"},{nicks:["shinyer"],wish:"地下铁解密"}
    ]},
    { name: "户外", icon: "🌿", entries: [
      {nicks:["kiwi","gigi是姐姐"],wish:"hiking"},
      {nicks:["八味","NuzzleNut"],wish:"钓鱼"},
      {nicks:["夜々","泰勒甜甜甜"],wish:"海钓"},
      {nicks:["哼哼","NuzzleNut","莲莲0724"],wish:"看樱花"},
      {nicks:["fififlieeepp","金金金"],wish:"骑马"},
      {nicks:["超级松鼠","鸦鸟不鸣"],wish:"跳伞"},
      {nicks:["大笑照明心自在佛"],wish:"滑翔伞"},
      {nicks:["鸡脚芝士🧀"],wish:"潜水"},
      {nicks:["哈士奇"],wish:"浮潜"},
      {nicks:["野草"],wish:"爬立山"},
      {nicks:["Sunny"],wish:"露营"},
      {nicks:["Sunny"],wish:"开车兜风"},
      {nicks:["東三七"],wish:"野营"},
      {nicks:["Woowooo"],wish:"代代木公园遛狗"},
      {nicks:["Banfanchi"],wish:"赶海"}
    ]},
    { name: "手工 · 学艺", icon: "✂️", entries: [
      {nicks:["熊古雷.半岛","Setsu","喝一杯拿铁","wEibOyuAn","东京住民王国涛女士"],wish:"陶艺"},
      {nicks:["鈴ニャン"],wish:"陶艺/玻璃制品"},
      {nicks:["Doris_桃乐丶丝"],wish:"手作（针织/缝纫/皮革/串珠）"},
      {nicks:["木一南"],wish:"钩针"},
      {nicks:["小笼包"],wish:"手工制作"},
      {nicks:["nono"],wish:"学法餐"},
      {nicks:["ちゆき","林中老屋"],wish:"插花"},
      {nicks:["ちゆき"],wish:"茶道、和果子制作"},
      {nicks:["不可观测","miemie"],wish:"画画写生"},
      {nicks:["薄荷满月"],wish:"雕塑"},
      {nicks:["wEibOyuAn"],wish:"做蛋糕"},
      {nicks:["Nightingale"],wish:"弹琴"},
      {nicks:["🐙"],wish:"橡皮章"},
      {nicks:["小燃"],wish:"学法语"},
      {nicks:["兔比芮池"],wish:"学习"},
      {nicks:["gaogaooo"],wish:"摄影"}
    ]},
    { name: "探店 · 娱乐", icon: "🥃", entries: [
      {nicks:["momo"],wish:"爵士乐酒吧喝威士忌"},
      {nicks:["49889532"],wish:"想用大白兔泡威士忌"},
      {nicks:["清遊録"],wish:"想尝试一下不错的僧人开的酒吧"},
      {nicks:["Sunny"],wish:"酒吧"},
      {nicks:["鲜虾鱼板"],wish:"动物咖啡"},
      {nicks:["shanlum"],wish:"手冲咖啡"},
      {nicks:["15th_moon"],wish:"打卡酒馆子"},
      {nicks:["莲莲0724"],wish:"探店"},
      {nicks:["Sunny"],wish:"演唱会"},
      {nicks:["木齿轮"],wish:"live house"}
    ]},
    { name: "表达 · 社交 · 创作", icon: "💬", entries: [
      {nicks:["Lan🌿"],wish:"乱讲ppt"},
      {nicks:["JunCee"],wish:"deep talk"},
      {nicks:["jimi"],wish:"找饭搭子"},
      {nicks:["酷玛小陈","960mmR2D2"],wish:"脱口秀"},
      {nicks:["癫癫的很安心"],wish:"日语/英语口语角"},
      {nicks:["Lauralaura","七天内可修改一次名字"],wish:"做播客"},
      {nicks:["Iris"],wish:"vibe coding"},
      {nicks:["momo"],wish:"写现代诗"},
      {nicks:["momo"],wish:"录视频讲一个看完的电影"},
      {nicks:["momo"],wish:"去别人家吃饭"},
      {nicks:["million"],wish:"一起学习"},
      {nicks:["シちゃん"],wish:"教日本人汉语"},
      {nicks:["这个人有点飘"],wish:"辩论赛"},
      {nicks:["白昼梦"],wish:"体验DJ"},
      {nicks:["Naviblyu_"],wish:"路演"}
    ]}
  ],
  buddy_board: [
    {nick:"莲莲0724",message:"有人一起约赏花吗，御苑下周"},
    {nick:"夜々",message:"海钓报名截止3/31，有兴趣体验的找我，钓具都能租空手去就行"}
  ]
};

const catColorMap = {
  "运动":                { bg: "#75D06A", text: "#FFF", border: "#75D06A" },
  "City walk":           { bg: "#1FA7E1", text: "#FFF", border: "#1FA7E1" },
  "户外":                { bg: "#FFB356", text: "#FFF", border: "#FFB356" },
  "手工 · 学艺":         { bg: "#9956DE", text: "#FFF", border: "#9956DE" },
  "探店 · 娱乐":         { bg: "#FF8B8B", text: "#FFF", border: "#FF8B8B" },
  "表达 · 社交 · 创作":   { bg: "#6ED1CF", text: "#FFF", border: "#6ED1CF" },
};

export default function App() {
  const threshold = data.meta.fire_threshold;
  const [view, setView] = useState("cat");

  const sortedCats = useMemo(() => {
    return [...data.categories].sort((a, b) => {
      const pa = new Set(a.entries.flatMap(e => e.nicks)).size;
      const pb = new Set(b.entries.flatMap(e => e.nicks)).size;
      return pb - pa;
    });
  }, []);

  const [activeCat, setActiveCat] = useState(sortedCats[0].name);

  const hotItems = useMemo(() => {
    const items = [];
    data.categories.forEach(cat => {
      cat.entries.forEach(e => {
        if (e.nicks.length >= threshold) items.push({ wish: e.wish, count: e.nicks.length, nicks: e.nicks });
      });
    });
    return items.sort((a, b) => b.count - a.count);
  }, []);

  const stats = useMemo(() => {
    const allNicks = new Set();
    let tw = 0;
    data.categories.forEach(cat => { tw += cat.entries.length; cat.entries.forEach(e => e.nicks.forEach(n => allNicks.add(n))); });
    return { people: allNicks.size, wishes: tw };
  }, []);

  const getCatPeople = (cat) => new Set(cat.entries.flatMap(e => e.nicks)).size;
  const currentCat = data.categories.find(c => c.name === activeCat);
  const currentEntries = currentCat ? [...currentCat.entries].sort((a, b) => b.nicks.length - a.nicks.length) : [];
  const tabName = (n) => n;

  const trackClick = (category, label) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', { event_category: category, event_label: label });
    }
  };

  const auxBtn = (active) => ({
    padding: "7px 16px", fontSize: 13, fontWeight: 500,
    border: active ? "1.5px solid #CBD5E1" : "1.5px solid #E2E8F0",
    borderRadius: 22, cursor: "pointer", transition: "all 0.2s",
    background: active ? "#F8FAFC" : "#FFF",
    color: active ? "#334155" : "#94A3B8",
    boxShadow: active ? "0 1px 4px rgba(0,0,0,0.05)" : "none",
    display: "inline-flex", alignItems: "center", gap: 6,
  });

  const catTab = (active, name) => {
    const c = catColorMap[name];
    return {
      padding: "7px 16px", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap",
      border: "none",
      borderRadius: 22, cursor: "pointer", transition: "all 0.2s",
      background: active ? c.bg : "#F1F5F9",
      color: active ? c.text : "#94A3B8",
      boxShadow: active ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
    };
  };

  return (
    <div style={{
      background: "#FFFFFF", minHeight: "100vh",
      fontFamily: "'Noto Sans SC', -apple-system, sans-serif",
      padding: "16px 16px 0", maxWidth: 480, margin: "0 auto", color: "#1E293B"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      {/* GA4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GM5VLX76H2"></script>
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-GM5VLX76H2');`}}/>

      {/* Header */}
      <div style={{
        background: "#F8FAFC", borderRadius: 16,
        padding: "24px 20px 20px", marginBottom: 14, textAlign: "center"
      }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0, lineHeight: 1.4, color: "#0F172A" }}>
          {data.meta.title}
        </h1>
      </div>

      {/* Row 1: Auxiliary buttons */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12, paddingLeft: 2 }}>
        <button style={auxBtn(view === "hot")} onClick={() => { setView(view === "hot" ? "cat" : "hot"); trackClick("aux_tab", "热门体验"); }}>
          🔥 热门体验
        </button>
        <button style={auxBtn(view === "buddy")} onClick={() => { setView(view === "buddy" ? "cat" : "buddy"); trackClick("aux_tab", "找搭子"); }}>
          🙋 找搭子
          {data.buddy_board.length > 0 && (
            <span style={{
              background: "#F43F5E", color: "#FFF",
              fontSize: 10, fontWeight: 700, borderRadius: 10,
              padding: "1px 6px", lineHeight: "16px"
            }}>{data.buddy_board.length}</span>
          )}
        </button>
      </div>

      {/* Row 2: Category tabs */}
      <div style={{
        display: "flex", gap: 6, overflowX: "auto", padding: "2px 0 12px",
        WebkitOverflowScrolling: "touch", scrollbarWidth: "none",
      }}>
        {sortedCats.map(cat => (
          <button key={cat.name} style={catTab(view === "cat" && activeCat === cat.name, cat.name)}
            onClick={() => { setView("cat"); setActiveCat(cat.name); trackClick("category_tab", cat.name); }}>
            {cat.icon} {tabName(cat.name)}
          </button>
        ))}
      </div>

      {/* Content: Hot */}
      {view === "hot" && (
        <div style={{ background: "#F8FAFC", borderRadius: 16, padding: "18px 20px", marginBottom: 14 }}>
          {hotItems.map((item, i) => (
            <div key={i} style={{
              paddingBottom: i < hotItems.length - 1 ? 14 : 0,
              marginBottom: i < hotItems.length - 1 ? 14 : 0,
              borderBottom: i < hotItems.length - 1 ? "1px solid #E2E8F0" : "none"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{
                  background: "#FFF7ED", color: "#C2410C", padding: "3px 12px",
                  borderRadius: 14, fontSize: 13, fontWeight: 600, border: "1px solid #FFEDD5"
                }}>{item.wish} 🔥</span>
                <span style={{ fontSize: 12, color: "#94A3B8" }}>× {item.count}</span>
              </div>
              <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.8, paddingLeft: 2 }}>
                {item.nicks.join("、")}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Content: Buddy */}
      {view === "buddy" && (
        <div style={{
          background: "#F0F9FF", border: "1.5px solid #BAE6FD",
          borderRadius: 16, padding: "18px 20px", marginBottom: 14
        }}>
          {data.buddy_board.map((b, i) => (
            <div key={i} style={{
              fontSize: 13, lineHeight: 1.7,
              paddingBottom: i < data.buddy_board.length - 1 ? 12 : 0,
              marginBottom: i < data.buddy_board.length - 1 ? 12 : 0,
              borderBottom: i < data.buddy_board.length - 1 ? "1px solid #BAE6FD" : "none"
            }}>
              <span style={{ fontWeight: 600, color: "#0369A1" }}>{b.nick}</span>
              <span style={{ color: "#475569" }}> — {b.message}</span>
            </div>
          ))}
        </div>
      )}

      {/* Content: Category */}
      {view === "cat" && currentCat && (() => {
        const color = catColorMap[currentCat.name];
        const people = getCatPeople(currentCat);
        return (
          <div style={{
            background: "#F8FAFC", borderRadius: 16,
            padding: "18px 20px", marginBottom: 14
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{
                background: color.bg,
                width: 38, height: 38, borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0
              }}>{currentCat.icon}</span>
              <div>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#0F172A" }}>{currentCat.name}</span>
                <span style={{ fontSize: 12, color: "#94A3B8", marginLeft: 8 }}>{people}人</span>
              </div>
            </div>
            {currentEntries.map((e, ei) => (
              <div key={ei} style={{
                fontSize: 13, lineHeight: 1.7,
                paddingBottom: ei < currentEntries.length - 1 ? 10 : 0,
                marginBottom: ei < currentEntries.length - 1 ? 10 : 0,
                borderBottom: ei < currentEntries.length - 1 ? "1px solid #E2E8F0" : "none"
              }}>
                <span style={{ fontWeight: 600, color: "#1E293B" }}>{e.wish}</span>
                {e.nicks.length >= threshold && <span> 🔥</span>}
                <span style={{ color: "#94A3B8", fontWeight: 400 }}> — {e.nicks.join("、")}</span>
              </div>
            ))}
          </div>
        );
      })()}

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "12px 0 28px", fontSize: 13, color: "#94A3B8" }}>
        共 {stats.people} 人 · {stats.wishes} 条心愿
      </div>
    </div>
  );
}
