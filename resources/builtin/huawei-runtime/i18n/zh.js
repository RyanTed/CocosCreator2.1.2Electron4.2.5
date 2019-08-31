
module.exports = {
    platform_name: '华为快游戏',

    package: '应用包名',
    package_hint: '请输入应用包名，如：com.example.demo',

    name: '应用名称',
    name_hint: '请输入应用名称',

    desktop_icon: '桌面图标',
    desktop_icon_hint: '请选择桌面图标的路径',

    version_name: '应用版本名称',
    version_name_hint: '请输入应用版本名称，如：1.0.0',

    version_number: '应用版本号',
    version_number_hint: '请输入应用版本号，如：1',

    support_min_platform: '支持的最小平台版本号',
    support_min_platform_hint: '请输入支持的最小平台版本号，如：1035',

    custom_manifest_file_path: '自定义manifest文件路径（选填）',
    custom_manifest_file_path_hint: '请选择自定义manifest的文件路径',
    full_screen: '是否全屏',
    screen_orientation: '屏幕方向',
    horizontal_screen: '横屏',
    vertical_screen: '竖屏',

    small_packet_mode: '小包模式',
    small_Packet_Path: '小包模式服务器路径',
    small_Packet_Path_hint: '资源存放的服务器地址',

    keystore: '密钥库',
    use_debug_keystore: '使用调试秘钥库',
    private_pem_path: 'private.pem路径',
    private_pem_path_hint: '请选择private.pem的路径',
    certificate_pem_path: 'certificate.pem路径',
    certificate_pem_path_hint: '请选择certificate.pem的路径',
    print_finger: ' 控制台打印证书指纹',

    //build-runtime.js
    custom_manifest_data: '自定义manifest数据为:',
    custom_manifest_data_error: '自定义manifest数据不是json格式，打包将不包含自定义manifest数据',

    zip_file_error: '压缩失败！错误：',
    install_nodejs_before_build_rpk: '打包rpk需要nodejs,请安装nodejs',
    begin_install_npm: '开始安装小游戏依赖的npm包，请耐心等待...',

    npm_installed_success: '小游戏依赖的npm包安装完成！',
    npm_install_fail: '小游戏依赖的npm包安装失败！错误：',

    rpk_installing: '开始构建rpk包...',
    rpk_install_fail: 'rpk包构建失败！错误：',
    rpk_install_success: 'rpk包构建完成!',
    not_mainfest_data: '当前无自定义mainfest文件路径，构建将不包含自定义mainfest数据',
    not_empty: '不能为空！',
    icon_not_exist: '路径下，图片不存在！',
    signature_not_exist: '签名不存在',

    private_pem_path_error: '请选择private.pem的路径',
    certificate_pem_path_error: '请选择certificate.pem的路径',

    build_certificate_complet: '生成证书完成！',
    build_certificate_fail: '生成证书失败！错误：',
    save_certificate_path: '保存证书的路径',
    select_save_certificate_path: '请选择保存证书的路径',

    custom_npm_path: "自定义node路径",
    custom_npm_path_hint: "选择自定义node文件夹路径",

    custom_npm_path_config: "自定义node路径不为空,node将用配置自定义的node路径:",
    custom_npm_path_not_config: "无配置自定义node路径,node路径将用系统环境变量路径",

    custom_npm_path_config_error: "自定义node路径错误，请重新选择",

    window_default_npm_path_error: "系统环境变量node路径错误，请配置系统环境变量或自定义node路径",
    mac_default_npm_path_error: "读取默认node路径在/usr/local/bin/找不到，请配置自定义node路径",

    choose_json_file: "选择json文件",
    choose_image: "选择图片",

    select_certificate_path: "查看证书指纹，请先选择certificatePath路径",
    install_nodejs_before_view_certificate: "查看证书指纹需要nodejs,请安装nodejs或配置自定义npm路径",
    select_certificate_path_after_view_certificate: "查看证书指纹错误，请选择正确的certificatePath路径",
    certificate_fingerprint: "证书指纹:",
    certificate_fingerprint_window_error: "打印证书指纹错误：检查系统环境是否配置node环境或配置自定义node路径",
    certificate_fingerprint_mac_error: "打印证书指纹错误：检查/usr/bin/是否有node,或配置自定义node路径",

    use_native_renderer: '使用 NativeRenderer',
};
