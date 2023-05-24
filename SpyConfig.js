let RspyList = {
    /* 监控信息配置 */
    SpyList: [
        {
            /* 任务名 确保任务名唯一性,因为id根据任务名计算生成*/ 
			Name: 'Spy测试1',
            /* 执行的脚本名 */
            Script: 'spy/test.js',
            /* 监听变量 */
            ListenEnv: ['jdzz', 'jdhb', 'mtgh'],
            /* 转换变量 */
            SetEnv: {
                jdzz: 'zhuanzhuan',
                jdhb: 'hongbao',
            },
            /* 超时退出 (秒)*/
            TimeOut: 0,
            /* 间隔时间(秒) */
            Interval: 30,
            /* 运行面板 0 代表 面板管理中的第一个容器 以此类推 */
            RunPanel: [0, 1, 2],
            /* 禁用任务 */
            Disable: false,
        },
		//以下监控列表
        {
            Name: '【麦基】幸运抽奖',
            Script: 'm_jd_wx_luckDraw.js',
            ListenEnv: ['M_WX_LUCK_DRAW_URL','GZSL_DRAW_URL','jd_lzkj_loreal_draw_url','LUCK_DRAW_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            SetEnv: {
                GZSL_DRAW_URL: 'M_WX_LUCK_DRAW_URL',
                jd_lzkj_loreal_draw_url: 'M_WX_LUCK_DRAW_URL',
                LUCK_DRAW_URL: 'M_WX_LUCK_DRAW_URL',
            },
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0, 1, 2, 3],
            Disable: false,
        },
        {
            Name: '【麦基】加购有礼',
            Script: 'm_jd_wx_addCart.js',
            ListenEnv: ['M_WX_ADD_CART_URL','jd_lzkj_loreal_cart_url','jd_wxCollectionActivity_activityUrl','jd_wxCollectionActivityUrl'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            SetEnv: {
                jd_lzkj_loreal_cart_url: 'M_WX_ADD_CART_URL',
                jd_wxCollectionActivityUrl: 'M_WX_ADD_CART_URL',
                jd_wxCollectionActivity_activityUrl: 'M_WX_ADD_CART_URL',
            },
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0, 1, 2, 3],
            Disable: false,
        },
        {
            Name: '【麦基】盖楼有礼',
            Script: 'm_jd_wx_buildDraw.js',
            ListenEnv: ['M_WX_BUILD_DRAW_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0, 1, 2, 3],
            Disable: false,
        },
        {
            Name: '【麦基】关注抽奖',
            Script: 'm_jd_wx_followDraw.js',
            ListenEnv: ['M_WX_FOLLOW_DRAW_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0, 1, 2, 3],
            Disable: false,
        },
        {
            Name: '【麦基】无线游戏',
            Script: 'm_jd_wx_game.js',
            ListenEnv: ['M_WX_GAME_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0, 1, 2, 3],
            Disable: false,
        },
        {
            Name: '【麦基】打豆抽奖',
            Script: 'm_jd_wx_dadoudou.js',
            ListenEnv: ['M_WX_DADOUDOU_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0, 1, 2, 3],
            Disable: false,
        },
        {
            Name: '【麦基】组队瓜分',
            Script: 'm_jd_wx_team.js',
            ListenEnv: ['M_WX_TEAM_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【麦基】粉丝红包',
            Script: 'm_jd_fans_redPackt.js',
            ListenEnv: ['M_FANS_RED_PACKET_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0, 1, 2],
            Disable: false,
        },
        {
            Name: '【麦基】收藏有礼',
            Script: 'm_jd_fav_shop_gift.js',
            ListenEnv: ['M_FAV_SHOP_ARGV'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0, 1, 2],
            Disable: false,
        },
        {
            Name: '【麦基】生日等级',
            Script: 'm_jd_wx_levelBirth.js',
            ListenEnv: ['M_WX_LEVEL_BIRTH_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【麦基】完善有礼',
            Script: 'm_jd_wx_completeDraw.js',
            ListenEnv: ['M_WX_COMPLETE_DRAW_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【麦基】关注有礼',
            Script: 'm_jd_follow_shop.js',
            ListenEnv: ['M_FOLLOW_SHOP_ARGV'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0, 1, 2, 3],
            Disable: false,
        },
        {
            Name: '【麦基】京耕邀请',
            Script: 'm_jd_wx_showInviteJoin.js',
            ListenEnv: ['M_JINGGENG_INVITE_URL','jd_showInviteJoin_activityUrl'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            SetEnv: {
                jd_showInviteJoin_activityUrl: 'M_JINGGENG_INVITE_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【麦基】老虎机抽',
            Script: 'm_jd_wx_centerDraw.js',
            ListenEnv: ['M_WX_CENTER_DRAW_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0, 1, 2, 3],
            Disable: false,
        },
        {
            Name: '【麦基】分享有礼',
            Script: 'm_jd_wx_share.js',
            ListenEnv: ['M_WX_SHARE_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 300,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【麦基】读秒手速',
            Script: 'm_jd_wx_secondDraw.js',
            ListenEnv: ['M_WX_SECOND_DRAW_URL'],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【麦基】邀请(10070)',
            Script: 'm_jd_interact_invite.js',
            ListenEnv: ['M_INTERACT_INVITE_URL','jd_lzkj_loreal_invite_url','jd_lzkjInteractUrl','INVITE_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            SetEnv: {
                jd_lzkj_loreal_invite_url: 'M_INTERACT_INVITE_URL',
                jd_lzkjInteractUrl: 'M_INTERACT_INVITE_URL',
                INVITE_URL: 'M_INTERACT_INVITE_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】完善信息有礼-JK',
            Script: 'jd_wxCompleteInfo.py',
            ListenEnv: [
                'jd_wxCompleteInfoId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】通用开卡-joinCommon系列',
            Script: 'jd_joinCommon_opencard.py',
            ListenEnv: [
                'jd_joinCommonId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】店铺抽奖-JK',
            Script: 'jd_dpcj.py',
            ListenEnv: [
                'DPCJID',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】邀好友赢大礼',
            Script: 'jd_inviteFriendsGift.py',
            ListenEnv: [
                'jd_inv_authorCode',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy加购物车抽奖',
            Script: 'jd_cjhy_wxCollectionActivity.js',
            ListenEnv: [
                'jd_cjhy_wxCollectionActivityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj关注店铺有礼',
            Script: 'jd_lzkj_wxShopFollowActivity.js',
            ListenEnv: [
                'jd_lzkj_wxShopFollowActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },

        {
            Name: '【KR🍃】完善信息有礼 · 超级无线',
            Script: 'jd_completeInfoActivity.js',
            ListenEnv: [
                'jd_completeInfoActivity_activityId','jd_completeInfoActivity_venderId'
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },

        {
            Name: '【KR🍃】 超级无线店铺签到-监控版',
            Script: 'jd_sevenDayjk.js',
            ListenEnv: [
                'jd_sevenDay_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 生日礼包和会员等级礼包',
            Script: 'jd_wxMcLevelAndBirthGifts.js',
            ListenEnv: [
                'jd_wxMcLevelAndBirthGifts_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 关注有礼（lzkj_loreal）',
            Script: 'jd_lzkj_loreal_followShop.js',
            ListenEnv: [
                'jd_lzkj_loreal_followShop_url',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 关注店铺有礼',
            Script: 'jd_wxShopFollowActivity.js',
            ListenEnv: [
                'jd_wxShopFollowActivity_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 分享有礼-加密',
            Script: 'jd_wxShareActivity.js',
            ListenEnv: [
                'jd_wxShareActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 集卡抽奖通用活动',
            Script: 'jd_wxCollectCard.js',
            ListenEnv: [
                'jd_wxCollectCard_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 邀请赢大礼',
            Script: 'jd_prodev.py',
            ListenEnv: [
                'yhyauthorCode',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 知识超人',
            Script: 'jd_wxKnowledgeActivity.js',
            ListenEnv: [
                'jd_wxKnowledgeActivity_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 购物车锦鲤通用活动',
            Script: 'jd_wxCartKoi.js',
            ListenEnv: [ 'jd_wxCartKoi_activityId','M_WX_CARTKOI_URL' ],
            SetEnv: {
                M_WX_CARTKOI_URL: 'jd_wxCartKoi_activityId'
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 读秒拼手速通用活动',
            Script: 'jd_wxSecond.js',
            ListenEnv: [
                'jd_wxSecond_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 店铺礼包特效',
            Script: 'jd_wxShopGift.js',
            ListenEnv: [
                'jd_wxShopGift_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 收藏大师-幸运抽奖',
            Script: 'jd_txzj_lottery.js',
            ListenEnv: [
                'jd_lottery_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 微定制瓜分福袋-加密',
            Script: 'jd_wdzfd.js',
            ListenEnv: [
                'jd_wdzfd_activityId',
                'jd_wdzfd_activityUrl'
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 微定制瓜分京豆-加密',
            Script: ' jd_wdz.js',
            ListenEnv: [
                'jd_wdz_activityId',
                'jd_wdz_activityUrl'
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】收藏大师-关注商品',
            Script: 'jd_txzj_collect_shop.js',
            ListenEnv: [
                'jd_collect_shop_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 收藏大师-关注有礼',
            Script: 'jd_txzj_collect_item.js',
            ListenEnv: [
                'jd_collect_item_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 收藏大师-加购有礼',
            Script: 'jd_txzj_cart_item.js',
            ListenEnv: [
                'jd_cart_item_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 CJ组队瓜分京豆-加密',
            Script: 'jd_cjzdgf.js',
            ListenEnv: [
                'jd_cjhy_activityId',
                'jd_cjhy_activityUrl'
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 LZ组队瓜分京豆-加密',
            Script: 'jd_zdjr.js',
            ListenEnv: [
                'jd_zdjr_activityId',
                'jd_zdjr_activityUrl'
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 CJ每日抢好礼通用活动',
            Script: 'jd_cjdaily.js',
            ListenEnv: [
                'jd_cjdaily_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 	LZ刮刮乐抽奖通用活动-加密',
            Script: 'jd_drawCenter.js',
            ListenEnv: [
                'jd_drawCenter_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 粉丝互动通用活动-加密',
            Script: 'jd_wxFansInterActionActivity.js',
            ListenEnv: [
                'jd_wxFansInterActionActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 LZ店铺游戏',
            Script: 'jd_wxgame.js',
            ListenEnv: [
                'jd_wxgame_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 盖楼有礼 · 超级无线',
            Script: 'jd_wxBuildActivity.js',
            ListenEnv: [
                'jd_wxBuildActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR🍃】 LZ让福袋飞',
            Script: 'jd_wxUnPackingActivity.js',
            ListenEnv: [
                'jd_wxUnPackingActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },

    ],
    /* 监控列表 */
    ListenList: [
        {
            Name: '自己的频道',
            Id: '-1001406956798',
        },
        {
            Name: 'WALL.E线报中心',
            Id: '-1001654299303',
        },
        {
            Name: '来薅线报',
            Id: '-1001749005484',
        },
        {
            Name: 'Mars☄️偷撸_Channel',
            Id: '-1001893923356',
        },
        {
            Name: '',
            Id: '',
        }
    ],

    //非静默触发消息多少秒撤回 0不撤回
    delMsgWaitTime: 10,
    //静默功能  默认false,会在监听到消息的地方回复监听结果 true则推送到静默推送设置的地方
    Taboo: true,
    TabooOriginalMsg: false /* 静默后推送的消息是否显示触发消息 */,
    //1 禁用任何日志输出 改为true后,不会向社交平台推送任何消息,且2 3开关失效 控制台除外
    DisableAllLogs: false,
    //2 禁用错误日志输出 改为true后,不会向社交平台推送任何错误消息 控制台除外
    DisableErrLogs: false,
    //3 禁用正常运行日志输出 改为true后,不会向社交平台推送任何任务运行成功的消息 控制台除外
    DisableRunLogs: false,
    //4 禁用控制台日志 改为true后,控制台不会显示任何消息
    DisableConsoleLog: false,
    //队列模式 1先进先出  2先进后出  其他值均视为 先进先出
    ListMode: 2,
    /* 运行日志输出位置,例如错误运行日志/任务运行成功等日志,只能设置1个 */
    runLogsInfo: {
        platform: 'HumanTG', //发送平台
        toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
        Id: '-930268413', //个人id 或群id
    },
    /* 静默后监控结果输出位置  可填多个*/
    TabooLogsInfo: [
        // 	{
        // 	platform: "HumanTG",
        // 	toGroupOrUser: "groupId",   //通知类型,个人userId //群groupId
        // 	Id: "-1001744932665"
        // },
         {
             platform: 'HumanTG', //发送平台
             toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
             Id: '-930268413', //个人id 或群id
         },
    ],
};


module.exports = {
    RspyList,
};
