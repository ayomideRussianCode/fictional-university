 <form action="<?php echo esc_url(site_url('/')); ?>" method="get" class="search-form">
     <label class="headline headline--medium" for="s">Perform a New Search:</label>
     <div class="search-form-row">
         <input type="search" name="s" id="s" placeholder="What are you looking for?" value="<?php the_search_query(); ?>">
         <input type="submit" value="Search">
 </form>