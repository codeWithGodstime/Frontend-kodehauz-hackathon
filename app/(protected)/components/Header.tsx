'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlined from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useAuth } from '@msflib/react-auth';
import { ROUTES } from '@/constant/routes.constant';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const router = useRouter();
  const { me, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleSignOut = () => {
    setAnchorEl(null);
    logout({ onSettled: () => router.push(ROUTES.login) });
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-stroke bg-surface px-4 lg:px-6">
      <div className="lg:invisible">
        <IconButton onClick={onMenuClick} aria-label="Open menu">
          <MenuIcon />
        </IconButton>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden md:block">
          <TextField
            size="small"
            placeholder="Search..."
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>

        <IconButton aria-label="Notifications">
          <NotificationsNoneOutlined />
        </IconButton>

        <button
          onClick={(event) => setAnchorEl(event.currentTarget)}
          className="flex items-center gap-2 rounded-lg p-2 text-text hover:bg-primary-light"
          aria-label="Account menu"
        >
          <span className="h-8 w-8 rounded-full bg-primary" />
          <span className="b2-m hidden sm:block">{me?.username ?? 'User'}</span>
          <KeyboardArrowDown fontSize="small" />
        </button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
        </Menu>
      </div>
    </header>
  );
}
