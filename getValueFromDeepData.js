/**
 * Created by vigro on 2017/9/12.
 */
/*
 此函数解决深层数据值的获取中防止出现问题所实用的方法
 厌倦了不停的取之判断例如：
 if(
 props.user &&
 props.user.comments &&
 props.user.comments[0] &&
 props.user.comments[0].blog.title
 ){
 value =  props.user.comments[0].blog.title
 }
 */
const getValueFromDeepData = (data, ...[array]) => {
  let value = JSON.parse(JSON.stringify(data));
  if(data == undefined || data == null){
    return undefined;
  }
  array.some(target=>{
    if(data[target] ==undefined){
      value =undefined;
      return true
    }else{
      value =value[target];
    }
  })
  return value
};
/*
此函数有两个参数，一个是具有深度的数据data
还有就是后面的参数
例如 props.user.comments[0].blog.title
参数列表就是 (props,'users','comments',0,'blog','title')
这样的话基本上报错的概率会大大降低
 */