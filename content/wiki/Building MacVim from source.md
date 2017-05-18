---
tags: vim wiki
---

# Official notes

-   <http://code.google.com/p/macvim/wiki/Building>

# Local notes

As of 1 March 2010, it seems that the following `configure` incantation will produce a build with the same features as the last official snapshot release (snapshot 51 at the time of writing):

    ./configure --with-features=huge --with-macarchs=i386 --enable-rubyinterp --enable-pythoninterp --enable-cscope --disable-nls
    make

This produces a build with the following features (as reported by `--version`):

    VIM - Vi IMproved 7.2 (2008 Aug 9, compiled Mar  1 2010 18:30:13)
    MacOS X (unix) version
    Included patches: 1-356
    Compiled by wincent@cuzco.local
    Huge version with MacVim GUI.  Features included (+) or not (-):
    +arabic +autocmd -balloon_eval +browse ++builtin_terms +byte_offset +cindent 
    +clientserver +clipboard +cmdline_compl +cmdline_hist +cmdline_info +comments 
    +cryptv +cscope +cursorshape +dialog_con_gui +diff +digraphs +dnd -ebcdic 
    +emacs_tags +eval +ex_extra +extra_search +farsi +file_in_path +find_in_path 
    +float +folding -footer +fork() +fullscreen -gettext -hangul_input +iconv 
    +insert_expand +jumplist +keymap +langmap +libcall +linebreak +lispindent 
    +listcmds +localmap +menu +mksession +modify_fname +mouse +mouseshape 
    +mouse_dec -mouse_gpm -mouse_jsbterm +mouse_netterm -mouse_sysmouse 
    +mouse_xterm +multi_byte +multi_lang -mzscheme +netbeans_intg +odbeditor 
    -osfiletype +path_extra -perl +postscript +printer +profile +python +quickfix 
    +reltime +rightleft +ruby +scrollbind +signs +smartindent -sniff +startuptime 
    +statusline -sun_workshop +syntax +tag_binary +tag_old_static -tag_any_white 
    -tcl +terminfo +termresponse +textobjects +title +toolbar +transparency 
    +user_commands +vertsplit +virtualedit +visual +visualextra +viminfo +vreplace 
    +wildignore +wildmenu +windows +writebackup -X11 -xfontset +xim -xsmp 
    -xterm_clipboard -xterm_save 
       system vimrc file: "$VIM/vimrc"
         user vimrc file: "$HOME/.vimrc"
          user exrc file: "$HOME/.exrc"
      system gvimrc file: "$VIM/gvimrc"
        user gvimrc file: "$HOME/.gvimrc"
        system menu file: "$VIMRUNTIME/menu.vim"
      fall-back for $VIM: "/Applications/MacVim.app/Contents/Resources/vim"
    Compilation: gcc -c -I. -Iproto -DHAVE_CONFIG_H -DFEAT_GUI_MACVIM -Wall -Wno-unknown-pragmas -pipe  -DMACOS_X_UNIX -no-cpp-precomp  -g -O2 -arch i386 -D_FORTIFY_SOURCE=1     -I/System/Library/Frameworks/Python.framework/Versions/2.6/include/python2.6   
    Linking: gcc   -L.   -arch i386 -L/usr/local/lib -o Vim -framework Cocoa -framework Carbon      -lm -lncurses  -liconv    -framework Python  -framework Ruby
