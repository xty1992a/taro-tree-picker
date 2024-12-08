import React, {useState} from 'react'
import Taro from '@tarojs/taro'
import {RichText, ScrollView, Swiper, SwiperItem, View} from '@tarojs/components'
import './index.less'
import {StickyNav} from "../../components/sticky_nav";

interface Props {
}


const novel = {
  text: `<font color="#000000" face="宋体" size="3">

　　话说当时史进道：“却怎生是好？”朱武等三个头领跪下答道：“哥哥，你是
干净的人，休为我等连累了。大郎可把索来绑缚我三个，出去请赏，免得负累了你
不好看。”史进道：“如何使得!恁地时，是我赚你们来，捉你请赏，枉惹天下人
笑。我若是死时，与你们同死，活时同活。你等起来，放心，别作圆便。且等我问
个来历缘故情由。”
　　史进上梯子问道：“你两个都头，何故半夜三更来劫我庄上？”那两个都头答
道：“大郎，你兀自赖哩!现有原告人李吉在这里。”史进喝道：“李吉，你如何
诬告平人？”李吉应道：“我本不知，林子里拾得王四的回书，一时间把在县前看，
因此事发。”史进叫王四问道：“你说无回书，如何却又有书？”王四道：“便是
小人一时醉了，忘记了回书。”史进大喝道：“畜生，却怎生好？”外面都头人等，
惧怕史进了得，不敢奔入庄里来捉人。三个头领把手指道：“且答应外面。”史进
会意，在梯子上叫道：“你两个都头都不要闹动，权退一步，我自绑缚出来，解官
请赏。”那两个都头却怕史进，只得应道：“我们都是没事的，等你绑出来，同去
请赏。”史进下梯子，来到厅前，先叫王四，带进后园，把来一刀杀了。喝教许多
庄客，把庄里有的没的细软等物，即便收拾，尽教打迭起了，一壁点起三四十个火
把。庄里史进和三个头领，全身披挂，枪架上各人跨了腰刀，拿了朴刀，拽扎起，
把庄后草屋点着。庄客各自打拴了包裹。外面见里面火起，都奔来后面看。且说史
进就中堂又放起火来，大开了庄门，呐声喊，杀将出来。
　　史进当头，朱武、杨春在中，陈达在后，和小喽罗并庄客，一冲一撞，指东杀
西。史进却是个大虫，那里拦当得住!后面火光乱起，杀开条路，冲将出来，正迎
着两个都头并李吉。史进见了大怒，“仇人相见，分外眼明”，两个都头见头势不
好，转身便走。李吉也却待回身，史进早到，手起一朴刀，把李吉斩做两段。两个
都头正待走时，陈达、杨春赶上，一家一朴刀，结果了两个性命。县尉惊得跑马走
回去了，众土兵那里敢向前，各自逃命散了，不知去向。史进引着一行人，且杀且
走，众官兵不敢赶来，各自散了。史进和朱武、陈达、杨春，并庄客人等，都到少
华山上寨内坐下，喘息方定。朱武等到寨中，忙叫小喽罗，一面杀牛宰马，贺喜饮
宴，不在话下。
　　一连过了几日，史进寻思：“一时间要救三人，放火烧了庄院，虽是有些细软
家财，粗重什物，尽皆没了。”心内踌躇，在此不了，开言对朱武等说道：“我的
师父王教头，在关西经略府勾当。我先要去寻他，只因父亲死了，不曾去得。今来
家私庄院废尽，我如今要去寻他。”朱武三人道：“哥哥休去，只在我寨中且过几
时，又作商议。若哥哥不愿落草时，待平静了，小弟们与哥哥重整庄院，再作良民。”
史进道：“虽是你们的好情分，只是我心去意难留。我若寻得师父，也要那里讨个
出身，求半世快乐。”朱武道：“哥哥便在此间做个寨主，却不快活?只恐寨小，
不堪歇马。”史进道：“我是个清白好汉，如何肯把父母遗体来点污了?你劝我落
草，再也休题。”史进住了几日，定要去，朱武等苦留不住。史进带去的庄客，都
留在山寨；只自收拾了些少碎银两，打拴一个包裹，余者多的尽数寄留在山寨。史
进头戴白范阳毡大帽，上撒一撮红缨，帽儿下裹一顶浑青抓角软头巾，项上明黄缕
带，身穿一领白丝两上领战袍，腰系一条揸五指梅红攒线膊，青白间道行缠绞
脚，衬着踏山透土多耳麻鞋，跨一口铜钹磬口雁翎刀，背上包裹，提了朴刀，辞别
朱武等三人。众多小喽罗都送下山来，朱武等洒泪而别，自回山寨去了。
　　只说史进提了朴刀，离了少华山，取路投关西五路，望延安府路上来。但见：
　　崎岖山岭，寂寞孤村。披云雾夜宿荒林，带晓月朝登险道。落日趱行闻犬吠，
严霜早促听鸡鸣。
    史进在路，免不得饥食渴饮，夜住晓行，独自一个行了半月之上，来到渭州。
这里也有一个经略府。“莫非师父王教头在这里？”史进便入城来看时，依然有六街
三市。只见一个小茶坊，正在路口。史进便入茶坊里来，拣一副座位坐了。茶博士
问道：“客官，吃甚茶？”史进道：“吃个泡茶。”茶博士点个泡茶，放在史进面前。
史进问道：“这里经略府在何处？”茶博士道：“只在前面便是。”史进道：“借问经略
府内有个东京来的教头王进么？”茶博士道：“这府里教头极多，有三四个姓王的，
不知那个是王进？”道犹未了，只见一个大汉，大踏步竟入走进茶坊里来。史进看他
时，是个军官模样，怎生结束，但见：
　　头裹芝麻罗万字顶头巾，脑后两个太原府纽丝金环，上穿一领鹦哥绿纻丝战袍，
腰系一条文武双股鸦青绦，足穿一双鹰爪皮四缝干黄靴。生得面圆耳大，鼻直口方，
腮边一部貉【（豸）加（操）去提手旁】胡须。身长八尺。腰阔十围。
　　那人入到茶坊里面坐下。茶博士便道：“客官要寻王教头，只问这个提辖，便
都认得。”史进忙起身施礼道：“官人，请坐拜茶。”那人见了史进长大魁伟，像
条好汉，便来与他施礼。两个坐下。史进道：“小人大胆，敢问官人高姓大名？”
那人道：“洒家是经略府提辖，姓鲁，讳个达字。敢问阿哥，你姓甚么？”史进道：
“小人是华州华阴县人氏，姓史，名进。请问官人，小人有个师父，是东京八十万
禁军教头，姓王名进，不知在此经略府中有也无？”鲁提辖道：“阿哥，你莫不是
史家村甚么九纹龙史大郎？”史进拜道：“小人便是。”鲁提辖连忙还礼，说道：
“闻名不如见面，见面胜似闻名。你要寻王教头，莫不是在东京恶了高太尉的王
进？”史进道：“正是那人。”鲁达道：“俺也闻他名字，那个阿哥不在这里。洒
家听得说，他在延安府老种经略相公处勾当。俺这渭州，却是小种经略相公镇守，
那人不在这里。你既是史大郎时，多闻你的好名字，你且和我上街去吃杯酒。”鲁
提辖挽了史进的手，便出茶坊来。鲁达回头道：“茶钱洒家自还你。”茶博士应道：
“提辖但吃不妨，只顾去。”
　　两个挽了胳膊，出得茶坊来，上街行得三五十步，只见一簇众人围住白地上。
史进道：“兄长，我们看一看。”分开人众看时，中间裹一个人，仗着十来条棍棒，
地上摊着十数个膏药，一盘子盛着，插把纸标儿在上面，却原来是江湖上使枪棒卖
药的。史进看了，却认的他，原来是教史进开手的师父，叫做打虎将李忠。史进就
人丛中叫道：“师父，多时不见。”李忠道：“贤弟，如何到这里？”鲁提辖道：
“既是史大郎的师父，同和俺去吃三杯。”李忠道：“待小子卖了膏药，讨了回钱，
一同和提辖去。”鲁达道：“谁耐烦等你?去便同去。”李忠道：“小人的衣饭，
无计奈何。提辖先行，小人便寻将来。贤弟，你和提辖先行一步。”鲁达焦躁，把
那看的人，一推一交，便骂道：“这厮们夹着屁眼撒开，不去的，洒家便打。”众
人见是鲁提辖，一哄都走了。李忠见鲁达凶猛，敢怒而不敢言，只得陪笑道：“好
急性的人。”当下收拾了行头药囊，寄顿了枪棒，三个人转弯抹角，来到州桥之下
一个潘家有名的酒店。门前挑出望竿，挂着酒旆，漾在空中飘荡。怎见得好座酒肆，
有诗为证：
风拂烟笼锦旆扬，太平时节日初长。
能添壮士英雄胆，善解佳人愁闷肠。
三尺晓垂杨柳外，一竿斜插杏花旁。
男儿未遂平生志，且乐高歌入醉乡。
　　三人上到潘家酒楼上，拣个济楚阁儿里坐下。鲁提辖坐了主位，李忠对席，史
进下首坐了。酒保唱了喏，认得是鲁提辖，便道：“提辖官人，打多少酒？”鲁达
道：“先打四角酒来。”一面铺下菜蔬、果品按酒，又问道：“官人，吃甚下饭？”
鲁达道：“问甚么?但有，只顾卖来，一发算钱还你。这厮只顾来聒噪。”酒保下
去，随即烫酒上来，但是下口肉食，只顾将来，摆一桌子。三个酒至数杯，正说些
闲话，较量些枪法，说得入港，只听得隔壁阁子里有人哽哽咽咽啼哭。鲁达焦躁，
便把碟儿、盏儿，都丢在楼板上。酒保听得，慌忙上来看时，见鲁提辖气愤愤地。
酒保抄手道：“官人要甚东西，分付买来。”鲁达道：“洒家要甚么?你也须认的
洒家，却恁地教甚么人在间壁吱吱的哭，搅俺弟兄们吃酒。洒家须不曾少了你酒钱！”
酒保道：“官人息怒，小人怎敢教人啼哭，打搅官人吃酒。这个哭的，是绰酒座儿
唱的父子两人。不知官人们在此吃酒，一时间自苦了啼哭。”鲁提辖道：“可是作
怪!你与我唤的他来。”
　　酒保去叫，不多时，只见两个到来：前面一个十八九岁的妇人，背后一个五六
十岁的老儿，手里拿串拍板，都来到面前。看那妇人，虽无十分的容貌，也有些动
人的颜色。但见：
　　鬅松云髻，插一枝青玉簪儿；袅娜纤腰，系六幅红罗裙子。素白旧衫笼雪体，
淡黄软袜衬弓鞋。蛾眉紧蹙，汪汪泪眼落珍珠；粉面低垂，细细香肌消玉雪。若非
雨病云愁，定是怀忧积恨。
    那妇人拭着眼泪，向前来深深的道了三个万福。那老儿也都相见了。鲁达问道：
“你两个是那里人家?为甚啼哭？”那妇人便道：“官人不知，容奴告禀：奴家是东京
人氏。因同父母来这渭州，投奔亲眷，不想搬移南京去了。母亲在客店里染病身故，
子父二人，流落在此生受。此间有个财主，叫做镇关西郑大官人，因见奴家，便使
强媒硬保，要奴作妾。谁想写了三千贯文书，虚钱实契，要了奴家身体。未及三个
月，他家大娘子好生利害，将奴赶打出来，不容完聚。着落店主人家追要原典身钱
三千贯。父亲懦弱，和他争执不得，他又有钱有势。当初不曾得他一文，如今那讨
钱来还他?没计奈何，父亲自小教得奴家些小曲儿，来这里酒楼上赶座子。每日但
得些钱来，将大半还他；留些少子父们盘缠。这两日酒客稀少，违了他钱限，怕他
来讨时，受他羞耻。子父们想起这苦楚来，无处告诉，因此啼哭。不想误触犯了官
人，望乞恕罪，高抬贵手。”
　　鲁提辖又问道：“你姓甚么?在那个客店里歇?那个镇关西郑大官人在那里住？”
老儿答道：“老汉姓金，排行第二；孩儿小字翠莲；郑大官人便是此间状元桥下卖
肉的郑屠，绰号镇关西。老汉父子两个，只在前面东门里鲁家客店安下。”鲁达听
了道：“呸!俺只道哪个郑大官人，却原来是杀猪的郑屠。这个腌泼才，投托着
俺小种经略相公门下做个肉铺户，却原来这等欺负人！”回头看着李忠、史进道：
“你两个且在这里，等洒家去打死了那厮便来。”史进、李忠抱住劝道：“哥哥息
怒，明日却理会。”两个三回五次劝得他住。
　　毕竟扯住鲁提辖的是甚人，且听下回分解。
</font>`
}
const NavPage: React.FC<Props> = (props) => {
  return (
    <View className='nav-page'>
      <StickyNav offset={10}>
        <Swiper autoplay circular className='banner'>
          <SwiperItem itemId='1'>
            <View className='banner-item' style={{backgroundColor: 'yellowgreen'}}>1</View>
          </SwiperItem>
          <SwiperItem itemId='2'>
            <View className='banner-item' style={{backgroundColor: 'cadetblue'}}>2</View>
          </SwiperItem>
          <SwiperItem itemId='3'>
            <View className='banner-item' style={{backgroundColor: 'orange'}}>3</View>
          </SwiperItem>
        </Swiper>
        <StickyNav.Item id='summary' label='简述'>
          <View className='summary block'>
            {
              Array.from({length: 20}).map((_, index) => (
                <View key={index} className='summary-item'>{index}. 本项目为您提供以下功能</View>
              ))
            }
          </View>
        </StickyNav.Item>
        <StickyNav.Item id='detail' label='详情'>
          <View className='detail block'>
            {
              Array.from({length: 20}).map((_, index) => (
                <View key={index} className='detail-item'>{index}. 本项目为您提供以下功能</View>
              ))
            }
          </View>
        </StickyNav.Item>
        <StickyNav.Item id='desc' label='备注'>
          <View className='block'>
            {/*<View dangerouslySetInnerHTML={{__html: novel.text}} />*/}
            {
              Array.from({length: 20}).map((_, index) => (
                <View key={index} className='detail-item'>{index}. 本项目为您提供以下功能</View>
              ))
            }
          </View>
        </StickyNav.Item>
        <StickyNav.Item id='recommand' label='猜你喜欢'>
          <View className='recommand block'>
            {
              Array.from({length: 20}).map((_, index) => (
                <View key={index} className='detail-item'>{index}. 本项目为您提供以下功能</View>
              ))
            }
          </View>
        </StickyNav.Item>
        <StickyNav.Item id='comment' label='评论'>
          <View className='comment block'>
            <ScrollView scrollX className='comments-slide'>
              <View className='comment-list' style={{
                // @ts-ignore
                ['--comment-count' as string]: 4
              }}
              >
                <View className='comment-item'>
                  <View className='comment-item-header'>评论标题</View>
                  <View className='comment-item-content'>
                    <View className='comment-item-content-text'>评论内容</View>
                    <View className='comment-item-content-image'>评论图片</View>
                  </View>
                </View>
                <View className='comment-item'>
                  <View className='comment-item-header'>评论标题</View>
                  <View className='comment-item-content'>
                    <View className='comment-item-content-text'>评论内容</View>
                    <View className='comment-item-content-image'>评论图片</View>
                  </View>
                </View>
                <View className='comment-item'>
                  <View className='comment-item-header'>评论标题</View>
                  <View className='comment-item-content'>
                    <View className='comment-item-content-text'>评论内容</View>
                    <View className='comment-item-content-image'>评论图片</View>
                  </View>
                </View>
                <View className='comment-item'>
                  <View className='comment-item-header'>评论标题</View>
                  <View className='comment-item-content'>
                    <View className='comment-item-content-text'>评论内容</View>
                    <View className='comment-item-content-image'>评论图片</View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </StickyNav.Item>

        <View style={{height: '100vh'}} />
      </StickyNav>
    </View>
  )
}

export default NavPage
