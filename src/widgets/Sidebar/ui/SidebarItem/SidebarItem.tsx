import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemList, SidebarItemType } from '../../model/Items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed?: boolean
}

export const SidebarItem = ({
    collapsed,
    item,
}: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <div>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={cls.item}
            >
                <item.Icon width={24} height={24} viewBox="0 0 48 48" className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        </div>
    );
};
