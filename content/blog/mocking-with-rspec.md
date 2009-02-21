---
title: Mocking with RSpec
tags: rspec
---

It's been a while since I heaped any praise on [RSpec](/wiki/RSpec), but I just had a nice experience with mock objects provided by the framework and wanted to briefly mention it here.

First up, the problem; the following buggy code in the admin interface for moderating issues:

    def index
      @paginator  = Paginator.new params, 
                                  Issue.count(:conditions => { :awaiting_moderation => true }),
                                  admin_issues_url
      @issues     = Issue.find :all,
                               :offset => @paginator.offset,
                               :conditions => { :awaiting_moderation => true },
                               :order => 'created_at DESC'
    end

The `Paginator` instance by default assumes 10 records per page, but the corresponding `find` statement on the `Issue` model has no limit at all, always returning all the records awaiting moderation.

So the fix will be to add a `:limit` clause to the `find` statement. While we're at it we'll raise the per-page record count from its default of 10 up to 20:

    def index
      @paginator  = Paginator.new params, 
                                  Issue.count(:conditions => { :awaiting_moderation => true }),
                                  admin_issues_url,
                                  20
      @issues     = Issue.find :all,
                               :offset => @paginator.offset,
                               :conditions => { :awaiting_moderation => true },
                               :order => 'created_at DESC',
                               :limit => @paginator.limit
    end

Before committing this fix, however, I want to add a regression test to my spec suite to make sure that the bug never creeps back in.

RSpec's [message expectations](http://rspec.info/documentation/mocks/message_expectations.html) allow me to define pretty much exactly what I want and no more:

    it 'should paginate in groups of 20' do
      paginator = Paginator.new({}, 100, 'foo', 20)
      Paginator.should_receive(:new).with(anything(), anything(), anything(), 20).and_return(paginator)
      Issue.should_receive(:find).with(anything(), hash_including(:limit => paginator.limit))
      do_get
    end

Basically I want to make sure that the `Paginator` receives a per-page limit of 20, and also that `Issue` gets the corresponding `:limit` clause. The `anything()` and `hash_including()` expectation helpers provide me with pretty much exactly what I want, allowing me to specify only the bits that are actually relevant to the expectation and leaving the rest unspecified.

Good stuff!
