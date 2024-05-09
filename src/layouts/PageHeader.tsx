import logo from '../assets/Logo.png';
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
import { Button } from '../components/Button';
import { useState } from 'react';
import { useSidebarContext } from '../contexts/SidebarContext';

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex justify-between gap-10 lg:gap-20 items-center pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? 'flex' : 'hidden md:flex '
        }`}
      >
        {showFullWidthSearch && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="flex-shrink-0"
            onClick={() => setShowFullWidthSearch(false)}
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="border rounded-l-full border-secondary-border px-4 py-1 shadow-inner shadow-secondary text-lg w-full outline-none focus:border-blue-500"
          />
          <Button
            type="button"
            className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0"
          >
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon">
          <Mic />
        </Button>
      </form>
      <div
        className={`md:gap-2 items-center flex-shrink-0 ${
          !showFullWidthSearch ? 'flex' : 'hidden'
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>

        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
}

export function PageHeaderFirstSection({
  hidden = false,
}: {
  hidden?: boolean;
}) {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`flex gap-4 items-center flex-shrink-0 ${
        hidden ? 'hidden' : 'flex'
      }`}
    >
      <Button variant="ghost" size="icon" onClick={toggle}>
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} alt="youtube logo" className="h-6" />
      </a>
    </div>
  );
}
