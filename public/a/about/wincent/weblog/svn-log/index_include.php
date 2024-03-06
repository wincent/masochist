<h2>Git log</h2>

<p class="more">
  <a
    href="https://typechecked.net/a/about/wincent/weblog/archives/2006/09/keeping_up_to_d.php"
    ><em>what's this?...</em></a
  >
</p>

<p class="quick-links-date">14 Mar 2008</p>
<ul>
  <li>
    <h4>
      Speed up full-text indexing by doing a multi-row insert (typechecked.net,
      0d3e312)
    </h4>
    <p>
      This gets indexing up to an acceptable speed (a 10,000 word, 90,000 byte
      test article took less than a second to save in development mode, so
      production mode should be fast enough) so we can turn it back on again.
    </p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>
      Fix the n+1 select problem in the tags implementation (typechecked.net,
      513d102)
    </h4>
    <p>
      When showing all items marked with a single tag (ie. the &quot;show&quot;
      action of the tags controller) or all items matching multiple tags (ie.
      the &quot;search&quot; action) we unfortunately had an n+1 SELECT problem
      because we had to inspect each Taggable instance to see if the user had
      access permissions to it.
    </p>

    <p>
      Now we reduce the number of queries by grabbing all Taggables for a given
      taggable type in one hit. In other words, given 3 matching Articles and 10
      matching Posts, we now do 2 queries during access checking rather than 13;
      and when we display the Taggables in the view there are no additional
      queries because the Taggables have already been fetched.
    </p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>
</ul>

<p class="quick-links-date">5 Mar 2008</p>
<ul>
  <li>
    <h4>Add product creation with icon uploading (typechecked.net, b970662)</h4>
    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>
      Add extension and description to products model (migration) (typechecked.net,
      4eb5a36)
    </h4>
    <p>
      We don't need to store the full path to the icon file but we do need to
      store the icon file extension; with this we can reconstruct the full path
      on demand.
    </p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>Update products link in navbar (typechecked.net, 76cf73f)</h4>
    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>
      Add products listing to index, links are permalinks (typechecked.net, 63db015)
    </h4>
    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>Fix products routing (typechecked.net, b906a09)</h4>
    <p>
      I'd mistakenly used &quot;map.resource&quot; instead of
      &quot;map.resources&quot; which meant that things like
      &quot;product_path&quot; didn't work.
    </p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>Assign found products for view (typechecked.net, 98ab4ca)</h4>
    <p>
      This is a spec, the corresponding change was already made to the
      controller itself.
    </p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>
      Teach products controller to find all products (typechecked.net, b794161)
    </h4>
    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>
      Add &quot;index&quot; action to products controller (typechecked.net, 96c7e77)
    </h4>
    <p>And accompanying specs.</p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>Add basic products controller specs (typechecked.net, 4b2b9cb)</h4>
    <p>
      These are the shared application controller specs which all controllers
      should pass.
    </p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>Validate uniqueness of product permalinks (typechecked.net, a33cdbc)</h4>
    <p>This is the validation and the corresponding spec.</p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>Require permalink on products model (typechecked.net, 6c0c3b7)</h4>
    <p>
      Add the validation, corresponding spec, and example data for
      FixtureReplacement.
    </p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>Add permalink column to products table (typechecked.net, a4263df)</h4>
    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>
</ul>

<p class="quick-links-date">4 Mar 2008</p>
<ul>
  <li>
    <h4>
      Add products controller and make it the default (root) route (typechecked.net,
      e1580bd)
    </h4>
    <p>
      Requests for the application root (/) now get routed to this new products
      controller, and concretely the &quot;index&quot; action.
    </p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>
      Add database-level constraint for product name uniqueness (typechecked.net,
      7805a54)
    </h4>
    <p>
      The Rails &quot;uniqueness&quot; validation is advisory only and is
      vulnerable to races, so add a database-level constraint to ensure
      integrity. (The Rails validation is about UI polish, not integrity.)
    </p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>Require product names to be unique (typechecked.net, b023972)</h4>
    <p>Add validation and corresponding spec.</p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>Require name in products model (typechecked.net, e323bf2)</h4>
    <p>Add validation and corresponding spec.</p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>Add example data for products model (typechecked.net, 4109d10)</h4>
    <p>
      This is the FixtureReplacement data that will be required in order to pass
      validations.
    </p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>

  <li>
    <h4>Make sure product name is not nil (typechecked.net, 8ef596d)</h4>
    <p>Add a database-level constraint.</p>

    <p>Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;</p>
  </li>
</ul>

<p class="more">
  <a
    href="https://typechecked.net/a/about/wincent/weblog/svn-log/archives/index.php"
    >Git log archives...</a
  >
</p>
