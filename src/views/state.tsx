let timer: number | null = null;
if (import.meta.hot) {
  // 添加不同模块更新时的持久化数据, 不可以直接赋值
  if (!import.meta.hot.data.count) {
    import.meta.hot.data.count = 0;
  }
  // 模块更新时候 清除之前模块的副作用
  import.meta.hot.dispose(() => {
    if (timer) {
      clearInterval(timer);
    }
  });
}

export function initState() {
  const getAndIncCount = () => {
    const data = import.meta.hot?.data || {
      count: 0
    };
    data.count = data.count + 1;
    return data.count;
  };

  timer = setInterval(() => {
    const countEle = document.getElementById("count");
    countEle!.innerText = getAndIncCount() + "";
  }, 1000) as unknown as number;
}
